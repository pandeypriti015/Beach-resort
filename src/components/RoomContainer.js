import React from "react";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
// import Loading from './Loading'
export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, setRoom, sortedRooms,rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} setRoom={setRoom} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}