import styled from "styled-components";

const Svg = styled.svg.attrs({
  viewBox: "0 0 136 36",
  xmlns: "http://www.w3.org/2000/svg"
})`
  margin-top: 0.5rem;
  fill: none;

  > * {
    fill: black;
  }
`;

export const Title = ({ width = 136, height = 36 }) => (
  <Svg width={width} height={height}>
    <path d="M14.739 11.5771H14.6656C12.9478 9.32119 11.1932 8.57034 8.83164 8.57034C3.53469 8.57034 0.3125 13.1188 0.3125 18.2412C0.3125 23.3603 3.78486 27.9822 8.90502 27.9822C11.2666 27.9822 13.4148 27.0879 14.8824 24.9021H14.9525V27.4816H19.8925V0.551304H14.739V11.5771ZM10.336 23.8242C7.29392 23.8242 5.68282 21.2813 5.68282 18.3814C5.68282 15.5883 7.22387 12.9386 10.1926 12.9386C13.4148 12.9386 14.9158 15.5515 14.9158 18.3113C14.9191 21.3881 13.2713 23.8242 10.336 23.8242ZM30.0261 8.56701C24.479 8.56701 20.613 12.3646 20.613 18.308C20.613 24.1813 24.479 27.9755 30.0261 27.9755C34.359 27.9755 37.7213 26.0067 38.9755 22.2457L33.9654 21.852C33.2483 23.2836 31.854 24.0378 30.2796 24.0378C27.5244 24.0378 26.2001 21.8887 25.9833 19.7396H39.4425V18.308C39.4425 12.3646 35.5732 8.56701 30.0261 8.56701ZM25.9833 16.4459C26.2702 14.3669 27.5944 12.5081 30.2796 12.5081C32.7479 12.5081 34.1089 14.6572 34.289 16.4459H25.9833ZM46.9609 3.77161H41.8074V9.0709H39.4458V13.0087H41.8074V22.8931C41.8074 26.8676 43.8488 27.6919 47.2144 27.6919C48.0383 27.6919 48.8622 27.5851 49.6828 27.4783V23.4304C49.3592 23.5005 49.0724 23.5372 48.6454 23.5372C47.3212 23.5372 46.9643 23.1434 46.9643 22.3192V13.0087H49.6861V9.0709H46.9643L46.9609 3.77161ZM59.4928 8.56701C53.9457 8.56701 50.0797 12.3646 50.0797 18.308C50.0797 24.1813 53.9457 27.9755 59.4928 27.9755C63.8258 27.9755 67.188 26.0067 68.4422 22.2457L63.4322 21.852C62.715 23.2836 61.3207 24.0378 59.7463 24.0378C56.9911 24.0378 55.6669 21.8887 55.4501 19.7396H68.9092V18.308C68.9059 12.3646 65.0399 8.56701 59.4928 8.56701ZM55.4467 16.4459C55.7336 14.3669 57.0578 12.5081 59.743 12.5081C62.2113 12.5081 63.5723 14.6572 63.7524 16.4459H55.4467ZM78.7159 12.9386C80.0768 12.9386 81.5812 13.5493 81.6879 16.1255L87.0583 15.9119C86.8081 12.0075 84.193 8.57034 78.7192 8.57034C73.1354 8.57034 69.7698 12.5448 69.7698 18.4548C69.7698 24.1112 72.8119 27.9789 78.826 27.9789C83.766 27.9789 86.201 25.0422 86.9849 20.9943L81.9381 20.8141C81.6512 22.6061 80.6506 23.8209 78.6825 23.8209C75.9974 23.8209 75.1401 21.0978 75.1401 18.665C75.1368 16.3024 75.5304 12.9386 78.7159 12.9386ZM94.9003 3.77161H89.7467V9.0709H87.3851V13.0087H89.7467V22.8931C89.7467 26.8676 91.7881 27.6919 95.1538 27.6919C95.9777 27.6919 96.7982 27.5851 97.6254 27.4783V23.4304C97.3019 23.5005 97.015 23.5372 96.5881 23.5372C95.2638 23.5372 94.9036 23.1434 94.9036 22.3192V13.0087H97.6254V9.0709H94.9036L94.9003 3.77161ZM98.9097 27.4783H104.063V9.0709H98.9097V27.4783ZM101.488 0.331055C99.7702 0.331055 98.4794 1.86946 98.4794 3.37449C98.4794 4.8061 99.7669 6.34783 101.488 6.34783C103.133 6.34783 104.493 4.87951 104.493 3.30441C104.497 1.65588 103.026 0.331055 101.488 0.331055ZM108.039 6.6682V9.06757H105.427V13.0053H108.039V27.475H113.193V13.0053H116.165V9.06757H113.193V6.20101C113.193 5.16317 113.836 4.69932 114.73 4.69932H116.161V0.331055H115.161C110.618 0.331055 108.039 1.51239 108.039 6.6682ZM130.128 9.0709L126.225 21.2446H126.152L122.249 9.0709H116.595L123.503 27.4783L120.424 35.5007H125.831L135.781 9.07424H130.128V9.0709Z" />
  </Svg>
);

export default Title;