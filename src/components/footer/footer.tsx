"use client";

import React from "react";
import Link from "next/link";

type Blog = "Blog";

export default function Footer() {
  const moveToLink = async (provider: Blog) => {
    let linkUrl = "https://blog.naver.com/pila_danmi";

    window.open(linkUrl, "_blank");
  };
  return (
    <>
      <div>
        <div>
          <h2>Danmi Pilates</h2>
          <div className="flex">
            대표자: 이연지 | 주소: 경기도 용인시 수지구 만현로 113. 미래프라자
            304호 | 상담문의: 010 8061 1490
            <br />
            사업자번호: 810-25-01511 | 카카오톡문의: pila_danmi | 블로그:
            https://blog.naver.com/pila_danmi
          </div>
          <div className="fixed right-6" bottom-6>
            COPYRIGHT @ 2024 Danmi Pilates ALL RIGHT RESERVED
          </div>
        </div>
      </div>
    </>
  );
}
