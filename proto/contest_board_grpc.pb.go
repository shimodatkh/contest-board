// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package contestboard

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ContestBoardClient is the client API for ContestBoard service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ContestBoardClient interface {
	// rpc GetMeasurement(GetMeasurementReq) returns (GetMeasurementRes) {}
	PutMeasurement(ctx context.Context, in *PutMeasurementReq, opts ...grpc.CallOption) (*PutMeasurementRes, error)
	GetMeasurements(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetMeasurementsRes, error)
}

type contestBoardClient struct {
	cc grpc.ClientConnInterface
}

func NewContestBoardClient(cc grpc.ClientConnInterface) ContestBoardClient {
	return &contestBoardClient{cc}
}

func (c *contestBoardClient) PutMeasurement(ctx context.Context, in *PutMeasurementReq, opts ...grpc.CallOption) (*PutMeasurementRes, error) {
	out := new(PutMeasurementRes)
	err := c.cc.Invoke(ctx, "/contestboard.ContestBoard/PutMeasurement", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contestBoardClient) GetMeasurements(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetMeasurementsRes, error) {
	out := new(GetMeasurementsRes)
	err := c.cc.Invoke(ctx, "/contestboard.ContestBoard/GetMeasurements", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ContestBoardServer is the server API for ContestBoard service.
// All implementations must embed UnimplementedContestBoardServer
// for forward compatibility
type ContestBoardServer interface {
	// rpc GetMeasurement(GetMeasurementReq) returns (GetMeasurementRes) {}
	PutMeasurement(context.Context, *PutMeasurementReq) (*PutMeasurementRes, error)
	GetMeasurements(context.Context, *emptypb.Empty) (*GetMeasurementsRes, error)
	mustEmbedUnimplementedContestBoardServer()
}

// UnimplementedContestBoardServer must be embedded to have forward compatible implementations.
type UnimplementedContestBoardServer struct {
}

func (UnimplementedContestBoardServer) PutMeasurement(context.Context, *PutMeasurementReq) (*PutMeasurementRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PutMeasurement not implemented")
}
func (UnimplementedContestBoardServer) GetMeasurements(context.Context, *emptypb.Empty) (*GetMeasurementsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMeasurements not implemented")
}
func (UnimplementedContestBoardServer) mustEmbedUnimplementedContestBoardServer() {}

// UnsafeContestBoardServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ContestBoardServer will
// result in compilation errors.
type UnsafeContestBoardServer interface {
	mustEmbedUnimplementedContestBoardServer()
}

func RegisterContestBoardServer(s grpc.ServiceRegistrar, srv ContestBoardServer) {
	s.RegisterService(&ContestBoard_ServiceDesc, srv)
}

func _ContestBoard_PutMeasurement_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PutMeasurementReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContestBoardServer).PutMeasurement(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/contestboard.ContestBoard/PutMeasurement",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContestBoardServer).PutMeasurement(ctx, req.(*PutMeasurementReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContestBoard_GetMeasurements_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContestBoardServer).GetMeasurements(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/contestboard.ContestBoard/GetMeasurements",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContestBoardServer).GetMeasurements(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// ContestBoard_ServiceDesc is the grpc.ServiceDesc for ContestBoard service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ContestBoard_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "contestboard.ContestBoard",
	HandlerType: (*ContestBoardServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PutMeasurement",
			Handler:    _ContestBoard_PutMeasurement_Handler,
		},
		{
			MethodName: "GetMeasurements",
			Handler:    _ContestBoard_GetMeasurements_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/contest_board.proto",
}
