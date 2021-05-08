#!/bin/sh

protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative proto/contest_board.proto 
protoc contest_board.proto -I=./proto --js_out=import_style=commonjs,binary:front/client/src/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:front/client/src/