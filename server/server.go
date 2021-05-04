package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	pb "github.com/shimodatkh/contest-board/proto"
	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 8080, "The server port")
)

type contestBoardServer struct {
	pb.UnimplementedContestBoardServer
}

func (s *contestBoardServer) PutMeasurement(ctx context.Context, req *pb.PutMeasurementReq) (*pb.PutMeasurementRes, error) {
	log.Printf("receive PutMeasurement: %d, %f", req.Id, req.Score)
	return &pb.PutMeasurementRes{Id: req.Id, Score: req.Score}, nil
}

func (s *contestBoardServer) GetMeasurements(ctx context.Context) (*pb., error) {
	log.Printf("receive GetMeasurements")
	return &pb.PutMeasurementRes{Id: req.Id, Score: req.Score}, nil
}

func newServer() *contestBoardServer {
	s := &contestBoardServer{}
	return s
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	pb.RegisterContestBoardServer(grpcServer, newServer())
	log.Printf("start server")
	grpcServer.Serve(lis)
}
