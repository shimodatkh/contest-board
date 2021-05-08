# FROM golang:1.14.0-alpine3.11

# ENV GO111MODULE=on

# WORKDIR /go/src/grpc-web-react-hooks

# RUN apk add --no-cache --update \
#   git

# RUN go get github.com/pilu/fresh

# Dockerfile

FROM golang:latest

ENV SRC_DIR=/go/src/github.com/shimodatkh/contest-board/server
WORKDIR $SRC_DIR
COPY . $SRC_DIR

# ADD ./api $SRC_DIR

# RUN go get -u google.golang.org/grpc \
#     && go get -u github.com/golang/protobuf/protoc-gen-go \
#     && go get -u github.com/shimodatkh/contest-board
# RUN go get -u github.com/shimodatkh/contest-board
EXPOSE 9090
CMD [ "go", "run", "server.go" ]