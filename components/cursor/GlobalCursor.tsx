"use client";

import StickyCursor from "./StickyCursor";
import { useCursor } from "@/contexts/CursorContext";

export default function GlobalCursor() {
  const { stickyElement } = useCursor();
  return <StickyCursor stickyElement={stickyElement} />;
}
