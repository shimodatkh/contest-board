package main

import (
	pb "../proto/contest_board"
)

type contestBoardServer struct {
	pb.UnimplementedContestBoardServer
}
