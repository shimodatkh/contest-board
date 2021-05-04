package main

import (
	"context"

	pb "github.com/shimodatkh/contest-board/proto"
)

type contestBoardServer struct {
	pb.UnimplementedContestBoardServer
}

func (s *contestBoardServer) PutMeasurement(ctx context.Context, req *pb.PutMeasurementReq) (*pb.PutMeasurementRes, error) {
	return &pb.PutMeasurementRes{}, nil
}
