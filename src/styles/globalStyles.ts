import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --brand1: #4529e6;
  --brand2: #5126ea;
  --brand3: #b0a6f0;
  --brand4: #edeafd;

  --grey0: #0b0d0d;
  --grey1: #212529;
  --grey2: #495057;
  --grey3: #868e96;
  --grey4: #adb5bd;
  --grey5: #ced4da;
  --grey6: #dee2e6;
  --grey7: #e9ecef;
  --grey8: #f1f3f5;
  --grey9: #f8f9fa;
  --grey10: #fdfdfd;
  --whitefixed: #ffffff;

  --alert1: #cd2b31;
  --alert2: #fdd8d8;
  --alert3: #ffe5e5;
  --sucess1: #18794e;
  --sucess2: #ccebd7;
  --sucess3: #ddf3e4;

  --random1: #e34d8c;
  --random2: #c04277;
  --random3: #7d2a4d;
  --random4: #7000ff;
  --random5: #6200e3;
  --random6: #36007d;
  --random7: #349974;
  --random8: #2a7d5f;
  --random9: #153d2e;
  --random10: #6100ff;
  --random11: #5700e3;
  --random12: #30007d;
}

.heading1-700 {
  font-size: 44px;
  font-weight: 700;
}
.heading2-600 {
  font-size: 35px;
  font-weight: 600;
}
.heading3-600 {
  font-size: 32px;
  font-weight: 600;
}
.heading3-500 {
  font-size: 32px;
  font-weight: 500;
}
.heading4-600 {
  font-size: 28px;
  font-weight: 600;
}
.heading4-500 {
  font-size: 28px;
  font-weight: 500;
}
.heading5-600 {
  font-size: 24px;
  font-weight: 600;
}
.heading5-500 {
  font-size: 24px;
  font-weight: 500;
}
.heading6-600 {
  font-size: 20px;
  font-weight: 600;
}
.heading6-500 {
  font-size: 20px;
  font-weight: 500;
}
.heading7-600 {
  font-size: 16px;
  font-weight: 600;
}
.heading7-500 {
  font-size: 16px;
  font-weight: 500;
}

body {
    width: 100%;
    height: 100%;
} 

*{
    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: transparent; 
      background-color: var(--brand2); 
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
}
   
`;
