package main

import (
	pb "github.com/shimodatkh/contest-board/proto/contestboard"
)

type contestBoardServer struct {
	pb.UnimplementedContestBoardServer
}
