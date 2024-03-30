FROM node:latest AS build
ARG BUILD_REF
ARG BUILD_DATE
ARG BUILD_VERSION

WORKDIR /build

COPY package.json .
COPY package-lock.json .
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund

COPY index.html .
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .

COPY public/ public/
COPY src/ src/

COPY deploy/update-package-json.js update-package-json.js
RUN chmod +x update-package-json.js && \
    node update-package-json.js "${BUILD_REF}" "${BUILD_DATE}" "${BUILD_VERSION}"

RUN --mount=type=cache,target=/root/.npm npm install tsc -g --no-audit --no-fund
RUN npm run build

FROM nginx:alpine
ARG BUILD_REF
ARG BUILD_DATE
ARG BUILD_VERSION

COPY --from=build /build/dist/ /usr/share/nginx/html

LABEL org.opencontainers.image.revision="${BUILD_REF}" \
    org.opencontainers.image.created="${BUILD_DATE}" \
    org.opencontainers.image.version="${BUILD_VERSION}" \
    org.opencontainers.image.title="boilerplate-web" \
    org.opencontainers.image.authors="Andrew Molyuk <andrew@molyuk.com>" \
    org.opencontainers.image.source="https://github.com/andrewmolyuk/golang-react-boilerplate/web" \
    org.opencontainers.image.vendor="Andrew Molyuk"
