SHELL := /bin/bash

# ==============================================================================
# Variables

BUILD_REF := "development"
BUILD_DATE := "$(shell date -u +"%Y-%m-%dT%H:%M:%SZ")"
BUILD_VERSION := ${BUILD_VERSION}
ifeq ($(BUILD_VERSION),)
	BUILD_VERSION := "0.0.0"
endif

# ==============================================================================
# Initialize the project

init:
	cd web || exit; rm -Rf node_modules; npm ci --no-audit --no-fund
	cd services || exit; go mod download; cd ..; make tidy
.PHONY: init

# ==============================================================================
# Upgrade dependencies

upgrade:
	npm i -g npm-check-updates
	cd web || exit; ncu -u
	cd services || exit; go get -u
	cd services || exit; go mod tidy
	cd services || exit; go mod vendor
.PHONY: upgrade

# ==============================================================================
# Modules

tidy:
	cd services || exit; go mod tidy
	cd services || exit; go mod vendor
.PHONY: tidy

# ==============================================================================
# Building containers

build: build-web build-users
	docker image prune -f --filter "until=1h"
.PHONY: build

build-web:
	DOCKER_CLI_HINTS=false docker build -t boilerplate-web:latest -t boilerplate-web:$(BUILD_VERSION) -f ./web/deploy/Dockerfile --build-arg BUILD_REF=$(BUILD_REF) --build-arg BUILD_DATE=$(BUILD_DATE) --build-arg BUILD_VERSION=$(BUILD_VERSION) ./web
.PHONY: build-web

build-users:
	DOCKER_CLI_HINTS=false docker build -t boilerplate-users:latest -t boilerplate-users:$(BUILD_VERSION) -f ./services/users/deploy/Dockerfile --build-arg BUILD_REF=$(BUILD_REF) --build-arg BUILD_DATE=$(BUILD_DATE) --build-arg BUILD_VERSION=$(BUILD_VERSION) ./services
.PHONY: build-users

# ==============================================================================
# Containers
compose-up:
	docker compose -f ./deploy/docker-compose.yml up
.PHONY: compose-up

compose-down:
	docker compose -f ./deploy/docker-compose.yml down
.PHONY: compose-down

# ==============================================================================
# Linting

lint: tidy
	cd services || exit; golangci-lint run
	cd services || exit; staticcheck -checks=all ./...
	cd web || exit; npm run lint
.PHONY: lint

# ==============================================================================
# Development

dev: 
	make -j 2 dev-web dev-users
.PHONY: dev

dev-web:
	cd web || exit; npm run dev
.PHONY: dev-web

dev-users:
	cd services || exit; go run ./users/app/main.go
.PHONY: dev-users