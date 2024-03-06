import { z } from "zod";

const phoneRegex = /^010\d{8}$/;

export const registerSchema = z.object({
  phone: z
    .string()
    .min(11, "연락처는 11자리여야 합니다.")
    .max(11, "연락처는 11자리여야 합니다.")
    .refine(
      (value) => phoneRegex.test(value),
      "010으로 시작하는 11자리 숫자를 입력해주세요",
    ),
  username: z
    .string()
    .min(2, { message: "이름은 2글자 이상이어야 합니다." })
    .max(100, { message: "이름은 100글자 이하이어야 합니다." }),
  role: z.string().min(2, { message: "역할을 선택하세요." }),
  birthday: z.string().min(6, { message: "생년월일을 입력하세요(000000)" }),
  gender: z.string().min(2, { message: "성별을 선택하세요" }),
  tutor: z.string().min(2, { message: "강사를 선택하세요" }),
});
