import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProgressProvider } from "@/context/ProgressContext";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Lesson from "@/pages/Lesson";
import Exam from "@/pages/Exam";
import Resources from "@/pages/Resources";

export default function App() {
  return (
    <ProgressProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </ProgressProvider>
  );
}
