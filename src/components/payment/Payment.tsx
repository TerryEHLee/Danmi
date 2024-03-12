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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema, registerSchema } from "@/validators/auth";
import { useForm } from "react-hook-form";

type PaymentInput = z.infer<typeof paymentSchema>;

export function Payment() {
  const form = useForm<PaymentInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      classPrice: "",
      coupon: "",
      point: "",
      totalPrice: "",
    },
  });

  const [selectedLessonType, setSelectedLessonType] = useState<string | null>(
    null,
  );

  const handleLessonTypeClick = (lessonType: string) => {
    setSelectedLessonType(lessonType);
  };

  function onSubmit(data: PaymentInput) {
    alert(JSON.stringify(data, null, 4));
  }

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
              <CardHeader>
                <CardTitle>결제금액</CardTitle>
                <CardDescription>
                  <div className="flex justify-between mt-2">
                    <div>수업가격</div>
                    <div className="mr-4">250000</div>
                  </div>
                  <div className="flex justify-between">
                    <div>쿠폰할인</div>
                    <div className="mr-4">250000</div>
                  </div>
                  <div className="flex justify-between">
                    <div>포인트 사용</div>
                    <div className="mr-4">250000</div>
                  </div>
                  <br />
                  <div className="flex justify-between">
                    <strong>최종 결제금액</strong>
                    <strong className="mr-4">250000</strong>
                  </div>
                </CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex">
        <div>
          <Card className="w-[700px]">
            <CardHeader>
              <CardTitle>쿠폰 & 포인트</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="relative space-y-3 overflow-x-hidden"
                >
                  <FormField
                    control={form.control}
                    name="coupon"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="쿠폰 사용하기" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="coupon10">
                              10% 할인쿠폰
                            </SelectItem>
                            <SelectItem value="coupon20">
                              20% 할인쿠폰
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex">
                    <FormField
                      control={form.control}
                      name="point"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>사용할 포인트를 입력하세요</FormLabel>
                          <FormControl>
                            <Input placeholder="보유포인트: 5000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">전액사용</Button>
                    </CardFooter>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="w-[350px]">
            <CardContent>
              <CardHeader>
                <CardTitle>결제수단</CardTitle>
                <CardDescription>
                  <div className="flex justify-between mt-2">
                    <div>수업가격</div>
                    <div className="mr-4">250000</div>
                  </div>
                  <div className="flex justify-between">
                    <div>쿠폰할인</div>
                    <div className="mr-4">250000</div>
                  </div>
                  <div className="flex justify-between">
                    <div>포인트 사용</div>
                    <div className="mr-4">250000</div>
                  </div>
                  <br />
                  <div className="flex justify-between">
                    <strong>최종 결제금액</strong>
                    <strong className="mr-4">250000</strong>
                  </div>
                </CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
