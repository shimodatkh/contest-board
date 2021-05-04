module github.com/shimodatkh/contest-board

go 1.16

replace (
	github.com/shimodatkh/contest-board/client => ./client
	github.com/shimodatkh/contest-board/proto => ./proto
	github.com/shimodatkh/contest-board/server => ./server
)

require (
	google.golang.org/grpc/cmd/protoc-gen-go-grpc v1.1.0 // indirect
	google.golang.org/protobuf v1.26.0 // indirect
)
