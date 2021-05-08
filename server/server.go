package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"sync"

	pb "github.com/shimodatkh/contest-board/proto"
	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 8081, "The server port")
)

type contestBoardServer struct {
	pb.UnimplementedContestBoardServer
	savedMeasurements []*pb.Measurement
	mu                sync.Mutex
}

func (s *contestBoardServer) PutMeasurement(ctx context.Context, req *pb.PutMeasurementReq) (*pb.PutMeasurementRes, error) {
	log.Printf("receive PutMeasurement request: %d, %f", req.Id, req.Score)
	s.mu.Lock()
	s.savedMeasurements = append(s.savedMeasurements, &pb.Measurement{Id: req.Id, Score: req.Score})
	s.mu.Unlock()
	return &pb.PutMeasurementRes{Id: req.Id, Score: req.Score}, nil
}

func (s *contestBoardServer) GetMeasurements(ctx context.Context, req *pb.GetMeasurementsReq) (*pb.GetMeasurementsRes, error) {
	log.Printf("receive GetMeasurements request")
	return &pb.GetMeasurementsRes{Measurements: s.savedMeasurements}, nil
}

func newServer() *contestBoardServer {
	s := &contestBoardServer{
		savedMeasurements: make([]*pb.Measurement, 0),
	}
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
	log.Printf("start server. port: %d", *port)
	grpcServer.Serve(lis)
}
