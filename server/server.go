package main

import (
	"context"
	"flag"
	"log"
	"net"
	"sync"

	pb "github.com/shimodatkh/contest-board/proto"
	"google.golang.org/grpc"
)

var (
	host = "0.0.0.0"
	port = flag.Int("port", 9090, "The server port")
)

type contestBoardServiceServer struct {
	pb.UnimplementedContestBoardServiceServer
	savedMeasurements []*pb.Measurement
	mu                sync.Mutex
}

func (s *contestBoardServiceServer) PutMeasurement(ctx context.Context, req *pb.PutMeasurementReq) (*pb.PutMeasurementRes, error) {
	log.Printf("receive PutMeasurement request: %d, %f", req.Id, req.Score)
	s.mu.Lock()
	s.savedMeasurements = append(s.savedMeasurements, &pb.Measurement{Id: req.Id, Score: req.Score})
	s.mu.Unlock()
	return &pb.PutMeasurementRes{Id: req.Id, Score: req.Score}, nil
}

func (s *contestBoardServiceServer) GetMeasurements(ctx context.Context, req *pb.GetMeasurementsReq) (*pb.GetMeasurementsRes, error) {
	log.Printf("receive GetMeasurements request")
	return &pb.GetMeasurementsRes{Measurements: s.savedMeasurements}, nil
}

func newServer() *contestBoardServiceServer {
	s := &contestBoardServiceServer{
		savedMeasurements: make([]*pb.Measurement, 0),
	}
	return s
}

func main() {
	flag.Parse()
	// lis, err := net.Listen("tcp", fmt.Sprintf("%s:%d", host, *port))
	lis, err := net.Listen("tcp", ":9090")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	pb.RegisterContestBoardServiceServer(grpcServer, newServer())
	log.Printf("start server. host:%s, port: %d", host, *port)
	grpcServer.Serve(lis)
}
