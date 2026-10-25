"use client";
import { useName } from "../context/NameContext";

export default function Footer() {
  const name = useName();   
  return <p>Footer:{name}</p>;
}