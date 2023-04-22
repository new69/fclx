FROM golang:1.20.3-alpine as builder

RUN mkdir -p /app
WORKDIR /app
COPY . .

ENV CGO_ENABLED=0
RUN GOOS=linux go build

FROM scratch

WORKDIR /app
COPY --from=builder /app .
CMD ["/app/hello"]