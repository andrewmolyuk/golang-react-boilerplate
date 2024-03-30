FROM golang:1.21 as builder

ARG CGO_ENABLED=0
ARG BUILD_DATE
ARG BUILD_REF
ARG BUILD_VERSION

WORKDIR /build

COPY . .

RUN go mod download all

RUN go build -ldflags "-s -w -X boilerplate-services/pkg/version.BuildDate=$BUILD_DATE -X boilerplate-services/pkg/version.BuildRef=$BUILD_REF -X boilerplate-services/pkg/version.BuildVersion=$BUILD_VERSION" -o ./users-app ./users/app/main.go

FROM scratch
ARG BUILD_DATE
ARG BUILD_REF
ARG BUILD_VERSION

COPY --from=builder /build/users-app /users-app

ENTRYPOINT ["/users-app"]

EXPOSE 8080

LABEL org.opencontainers.image.revision="${BUILD_REF}" \
    org.opencontainers.image.created="${BUILD_DATE}" \
    org.opencontainers.image.version="${BUILD_VERSION}" \
    org.opencontainers.image.title="boilerplate-users" \
    org.opencontainers.image.authors="Andrew Molyuk <andrew@molyuk.com>" \
    org.opencontainers.image.source="https://github.com/andrewmolyuk/golang-react-boilerplate/services/users" \
    org.opencontainers.image.vendor="Andrew Molyuk"
