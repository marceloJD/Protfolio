"use client";
import { useState } from "react";


export function useHomeViewModel() {

  const [obscureMode, setObscureMode] = useState(true);
  



  return { obscureMode,setObscureMode };
}
