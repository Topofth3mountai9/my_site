import React, { useEffect, useState } from "react";
import {
  About_me,
  Contact,
  CTA,
  Footer,
  Hero,
  MyProcess,
  NavBar,
  Services,
  Stats,
  Testimonials,
  Work,
} from "../sections";

// import { ReactLenis } from 'lenis/dist/lenis-react';

import { connectLenisToGSAP } from "../helpers/scroll_utils";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useDimension } from "../hooks/useDimension";
import Cool_hover_effect from "../ui/cool_hover_effect";
import { cool_menu_data, cool_menu_preview_imgs } from "../data";
import styled from "styled-components";
import ScrollDebugger from "../ui/scroll_debugger";

const AppLayout = () => {
  // const [context, set_context] = useState(null);

  // const canvas = document.querySelector("canvas");

  // // console.log(ctx);
  // const { width, height } = useDimension();

  // useEffect(() => {
  //   //GETTING ITS 2D rendering context to allow us to draw on the canvas
  //   const context = canvas.getContext("2d");
  //   let ctx = context;
  //   //defining how our mouse trail looks
  //   ctx.lineWidth = 10;
  //   ctx.strokeStyle = "rgba(255,255,255,.6)";
  //   ctx.lineCap = "round";
  //   ctx.filter = "blur(12px)";

  //   set_context(ctx);
  // }, []);

  // const [mouse_position, set_mouse_position] = useState({
  //   x_mouse_pos: 0, //current horizontal position
  //   y_mouse_pos: 0, //current vertical position should be updated every time the mouse moves
  //   last_scrolled_left: 0, //keeping track of the last scrolled position horizontally
  //   last_scrolled_top: 0, //vertically
  //   last_x: null, //to indicate that there hasn't been a previous mouse position recorded yet
  //   last_y: null,
  //   has_mouse_moved: false,
  // });

  // const {
  //   x_mouse_pos,
  //   y_mouse_pos,
  //   last_scrolled_left,
  //   last_scrolled_top,
  //   last_x,
  //   last_y,
  //   has_mouse_moved,
  // } = mouse_position;

  // function draw_line(ctx, new_x, new_y) {
  //   // console.log(ctx);
  //   // console.log(new_x, new_y);
  //   // console.log(last_x, last_y);
  //   //if we have a last recorded pos, we draw a line from the last pos to the new pos
  //   if (mouse_position.last_x !== null && mouse_position.last_y !== null) {
  //     ctx.beginPath();
  //     ctx.moveTo(last_x, last_y);
  //     ctx.lineTo(new_x, new_y);
  //     ctx.stroke();
  //   }

  //   set_mouse_position((prev) => ({
  //     ...prev,
  //     last_x: new_x,
  //     last_y: new_y,
  //   }));
  // }

  // //
  // function on_mouse_move(x, y, page_x, page_y) {
  //   // console.log(x, y);
  //   // console.log(mouse_position);
  //   //for the first move we simply update the last_x, last_y and also the has_mouse_moved_flag without drawing anything
  //   if (!mouse_position.has_mouse_moved) {
  //     set_mouse_position((prev) => ({
  //       ...prev,
  //       last_x: x,
  //       last_y: y,
  //       has_mouse_moved: true,
  //     }));
  //     console.log(mouse_position);
  //   }
  //   //for  subsequent mouse moves, we update the x and y positions with the new positions
  //   else {
  //     set_mouse_position((prev) => ({
  //       ...prev,
  //       x_mouse_pos: x,
  //       y_mouse_pos: y,
  //       // x_mouse_pos: page_x,
  //       // y_mouse_pos: page_y,
  //     }));
  //     draw_line(
  //       // document.querySelector('canvas').getContext('2d'),
  //       context,
  //       x_mouse_pos,
  //       y_mouse_pos
  //       // x,
  //       // y
  //     );
  //   }
  // }

  // //helper function to ensure the canvas always matches the size of the window
  // function resize_canvas() {
  //   //this function adjusts the canvas width and height to match cover the entire browser window even as it changes size
  //   canvas.width = width;
  //   canvas.height = Math.max(
  //     document.body.scrollHeight,
  //     document.body.offsetHeight,
  //     document.documentElement.clientHeight,
  //     document.documentElement.scrollHeight,
  //     document.documentElement.offsetHeight
  //   );
  // }

  // //let's create a canvas element and attach it to the body of our document
  // useEffect(() => {
  //   resize_canvas();
  // }, [width, height]);

  // useEffect(() => {
  //   document.addEventListener("mousemove", (event) => {
  //     //extracting the mouse position
  //     const { clientY, clientX, pageX, pageY } = event;
  //     // console.log(clientY, clientX, pageX, pageY);
  //     on_mouse_move(clientX, clientY, pageX, pageY);

  //     // console.log(mouse_position.x_mouse_pos, mouse_position.y_mouse_pos);
  //     // console.log(clientX, clientY);
  //   });

  //   return () => window.removeEventListener("mousemove", on_mouse_move);
  // }, [on_mouse_move]);

  // //SETTING UP A LISTENER FOR THE SCROLL EVENT
  // useEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     //diff between the current scroll pos and the last known scroll position
  //     const x_scroll_delta = window.scrollX - last_scrolled_left;
  //     const y_scroll_delta = window.scrollY - last_scrolled_top;

  //     //if there is a change, we adjust the mouse position of x and y by the delta to align the trail with the new view and then draw the line
  //     if (x_scroll_delta !== 0 || y_scroll_delta !== 0) {
  //       set_mouse_position((prev) => ({
  //         ...prev,
  //         x_mouse_pos: prev.x_mouse_pos + x_scroll_delta,
  //         y_mouse_pos: prev.y_mouse_pos + y_scroll_delta,
  //       }));
  //       draw_line(
  //         // document.querySelector('canvas').getContext('2d'),
  //         context,
  //         mouse_position.x_mouse_pos,
  //         mouse_position.y_mouse_pos
  //       );
  //     }
  //     //after updating, we reset the last scrolled positions to the current ones for the next event
  //     set_mouse_position((prev) => ({
  //       ...prev,
  //       last_scrolled_left: window.scrollY,
  //       last_scrolled_top: window.scrollX,
  //     }));
  //   });
  // }, []);

  const lenis = useLenis();
  useEffect(() => {
    if (lenis) {
      const cleanup = connectLenisToGSAP(lenis);
      return cleanup;
    }
  }, [lenis]);

  return (
    // <AppLayoutWRapper className="app_layout_wrapper">
    //   </AppLayoutWRapper>
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      {process.env.NODE_ENV === "development" && <ScrollDebugger />}
      <NavBar />
      <Hero />
      <About_me />
      <Services />
      <Work />
      {/* <Testimonials /> */}
      <Testimonials />
      <MyProcess />
      <Stats />
      <Contact />

      {/* <CTA /> */}
      {/* <Cool_hover_effect
        images={cool_menu_preview_imgs}
        menu_data={cool_menu_data}
      /> */}
      <Footer />
    </ReactLenis>
  );
};

const AppLayoutWRapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //above the hero images but below the pre-loader
  z-index: 1;
  //initially not showing the whole app
  opacity: 0;
  margin-top: 70rem;
  will-change: opacity, margin-top;
`;

export default AppLayout;
