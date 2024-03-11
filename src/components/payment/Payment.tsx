"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export function Payment() {
  const [selectedLessonType, setSelectedLessonType] = useState<string | null>(
    null,
  );

  const handleLessonTypeClick = (lessonType: string) => {
    setSelectedLessonType(lessonType);
  };

  return (
    <>
      <div className="flex">
        <div>
          <Card className="w-[700px]">
            <CardContent>
              <form>
                <Button
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLessonTypeClick("1:1");
                  }}
                >
                  1:1 개인레슨
                </Button>
                <Button
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLessonTypeClick("2:1");
                  }}
                >
                  2:1 듀엣레슨
                </Button>
                <Button
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLessonTypeClick("4:1");
                  }}
                >
                  4:1 그룹레슨
                </Button>
                <br />

                {selectedLessonType === "1:1" && (
                  <div>
                    <Button variant="outline" size="lg">
                      10회 | 2개월 <br />
                      회당 70400원 <br />
                      704000원
                    </Button>
                    <Button variant="outline" size="lg">
                      20회 | 3개월 <br />
                      회당 66000원 <br />
                      1320000원
                    </Button>
                    <Button variant="outline" size="lg">
                      30회 | 4개월 <br />
                      회당 59000원 <br />
                      1770000원
                    </Button>
                  </div>
                )}

                {selectedLessonType === "2:1" && (
                  <div>
                    <Button variant="outline" size="lg">
                      10회 | 2개월 <br />
                      회당 47000원 <br />
                      470000원
                    </Button>
                    <Button variant="outline" size="lg">
                      20회 | 3개월 <br />
                      회당 41500원 <br />
                      830000원
                    </Button>
                    <Button variant="outline" size="lg">
                      30회 | 4개월 <br />
                      회당 36000원 <br />
                      1080000원
                    </Button>
                  </div>
                )}

                {selectedLessonType === "4:1" && (
                  <div>
                    <Button variant="outline" size="lg">
                      8회 | 1개월 <br />
                      회당 26500원 <br />
                      212000원
                    </Button>
                    <Button variant="outline" size="lg">
                      16회 | 2개월 <br />
                      회당 23000원 <br />
                      368000원
                    </Button>
                    <Button variant="outline" size="lg">
                      24회 | 3개월 <br />
                      회당 20000원 <br />
                      480000원
                    </Button>
                    <Button variant="outline" size="lg">
                      48회 | 6개월 <br />
                      회당 18000원 <br />
                      864000원
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="w-[350px]">
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">결제금액</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
