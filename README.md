# Prophet Launchpad
สวัสดีครับท่านศาสดา button เวอร์ชั่น 2

![https://raw.githubusercontent.com/SaltyAom/prophet-launchpad/main/assets/image/prophet-launchpad.jpg](สวัสดีครับท่านศาสดา button 2)

[ลองเล่นเลย](https://prophet-button.netlify.app)

## Prerequisted
1. ลง [Node.js](http://nodejs.org/)

2. กดปุ่ม fork repo ที่มุมขวาบนของ [repo](https://github.com/saltyAom/prophet-launchpad) ก่อน

3. Clone repo นี้
```typescript
git clone https://github.com/<ชื่อ username Github ของตัวเอง>/prophet-launchpad
cd prophet-launchpad
```

4. ติดตั้ง module:
```bash
# ลงด้วย npm
npm install

# ลงด้วย yarn
yarn

# ลงด้วย pnpm
pnpm install
```

5. รัน dev server
```bash
# run ด้วย npm
npm run dev

# run ด้วย yarn
yarn dev

# run ด้วย pnpm
pnpm run dev
```

## Contributing
1. เพิ่ม asset เสียงเข้าไปที่ `assets/sound` [ตั้งชื่อด้วยตัวอักษร karaoke](https://dekgenius.com/karaoke) เพราะ Netlify ไม่ support asset ตัวอักษรไทย

2. เข้าไปเพิ่ม list เสียงที่ `src/lib/data/sound.ts`
เพิ่มเข้าไปใน array `sounds` ด้วยลำดับตามนี้
[คำที่ต้องการแสดงในหน้าเว็บ, ชื่อไฟล์เสียงที่เพิ่มเข้าไป, ระยะเวลาของไฟล์เสียง]
เช่น
```typescript
// src/lib/data/sound.ts
export const sounds: Sounds = [
    // ...
	['สวัสดีครับ', 'sà-wàt-dee kráp.mp3', 1.35],
	['ท่านสมาชิก', 'tân sà-maa-chík.mp3', 1.35],
    // ...
]
```

3. ลอง build ดูก่อนว่า build ผ่านไหม:
```bash
# run ด้วย npm
npm run build

# run ด้วย yarn
yarn build

# run ด้วย pnpm
pnpm run build
```

4. ถ้า build ผ่านแล้วก็[ส่ง PR เข้ามาที่ repo หลักเลย](https://github.com/SaltyAom/prophet-launchpad/pulls)