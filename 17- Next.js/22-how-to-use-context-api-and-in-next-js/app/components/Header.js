"use client";
import { useName } from "../context/NameContext";

export default function Header() {
  const name = useName();   
  return <h2>Header:{name}</h2>;
}