#!/bin/sh

protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative server/contest_board.proto 
protoc contest_board.proto -I=./server --js_out=import_style=commonjs,binary:client/src/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:client/src/

cd server
go get -u github.com/shimodatkh/contest-board/proto


