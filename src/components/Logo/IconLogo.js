import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <svg
      className={className}
      {...rest}
      width="100"
      height="30"
      viewBox="0 0 20 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M43.6381,39.7271 C43.4221,39.7661 42.8861,39.7631 42.2771,39.7591 C42.0321,39.7571 41.7571,39.7551 41.4501,39.7551 C41.2901,39.7541 40.8051,39.3311 40.4391,38.8661 C40.3531,38.7701 38.3191,36.4971 36.8721,35.2991 C36.1901,34.7341 35.5061,34.2691 34.8641,33.8401 C34.6971,33.7291 34.5511,33.6341 34.4151,33.5461 C34.1221,33.3561 33.8901,33.2061 33.6021,32.9901 C31.4601,31.3821 29.0111,29.6741 27.0921,29.1871 C26.9041,29.1391 26.7151,29.2521 26.6681,29.4401 C26.6201,29.6261 26.7331,29.8171 26.9201,29.8641 C27.5201,30.0161 28.1841,30.3021 28.8801,30.6741 C28.5401,31.0231 27.9971,31.5071 27.4301,32.0131 C26.4651,32.8741 25.3701,33.8501 24.7241,34.6341 C24.2051,35.2641 23.9491,35.7121 23.9641,35.9681 C23.9941,36.4811 24.3491,38.1481 24.5551,38.5101 C24.6831,38.7351 24.9221,38.8061 25.1331,38.8691 C25.3261,38.9261 25.5101,38.9811 25.6331,39.1271 C25.7091,39.2261 25.7991,39.6201 25.7791,39.7051 C25.7201,39.7511 25.4691,39.7821 25.2471,39.7641 L24.3021,39.7441 C23.8191,39.7331 23.7471,39.4691 23.7391,39.4251 L23.7071,39.3161 C23.3831,38.6441 23.0981,37.2961 22.8901,36.3121 C22.7891,35.8321 22.7011,35.4181 22.6241,35.1401 C22.5011,34.6961 22.6261,34.3631 22.7251,34.0951 C22.7501,34.0311 22.7711,33.9721 22.7881,33.9191 C23.4261,31.9021 23.8671,30.8251 24.0111,30.5371 C24.1591,30.2401 24.1131,30.0301 24.0481,29.9061 C23.9541,29.7261 23.7791,29.6411 23.6021,29.6191 C21.2631,29.5691 16.5731,28.6851 14.5701,28.3081 C13.6921,28.1421 13.5951,28.1251 13.5231,28.1251 C13.4921,28.1251 13.4471,28.1201 13.3921,28.1151 C13.2821,28.1031 13.1421,28.0891 12.9921,28.0891 C12.6581,28.0891 12.2691,28.1591 12.0311,28.4811 C10.9301,29.9731 8.0731,33.5481 7.5611,34.0011 C7.0461,34.4561 6.9781,34.7351 7.0301,35.1181 C7.0341,35.1511 7.0391,35.1841 7.0411,35.2201 C7.0431,35.2481 8.3161,38.3691 8.8001,38.5081 C8.8701,38.5291 9.0371,38.5691 9.2271,38.6151 C9.4371,38.6651 9.6761,38.7221 9.8281,38.7631 C9.9131,38.7871 10.1731,38.8571 10.2421,39.5241 C10.2471,39.5801 10.2421,39.6231 10.2281,39.6401 C10.1701,39.7081 9.9351,39.7211 9.8471,39.7271 C9.8061,39.7291 9.7711,39.7311 9.7451,39.7341 C9.6381,39.7461 8.8841,39.7521 8.2041,39.7531 C8.2011,39.7531 7.8701,39.7351 7.4881,39.0721 C7.1691,38.5201 5.6781,35.9851 4.7321,34.5771 C4.4401,34.1431 4.3631,33.6781 4.5391,33.4201 C4.5691,33.3761 4.6101,33.3091 4.6571,33.2281 C4.6581,33.2271 4.6591,33.2261 4.6591,33.2251 L4.6601,33.2241 C5.0411,32.5701 5.9001,30.8821 6.0051,30.6751 C6.1581,30.3901 6.8971,28.9281 6.5061,28.1381 C5.7031,26.5171 5.1811,24.4551 5.0351,22.3301 C4.9101,20.4961 6.2541,17.9241 6.2671,17.8991 L6.3611,17.7221 L6.2561,17.5531 C5.0941,15.6691 4.6651,13.3091 4.6521,11.8601 C4.6361,10.2161 5.4231,8.3531 5.4341,8.3271 C6.0101,6.8881 6.2391,5.3881 6.0641,4.2121 C5.9711,3.5931 5.7101,3.0071 5.4791,2.4901 C5.2931,2.0721 5.1171,1.6771 5.1081,1.4181 C5.0891,0.8831 5.2911,0.8481 5.4091,0.827855507 C5.6361,0.8171 6.6831,1.1701 7.1081,3.3471 C7.4821,5.2601 6.8261,7.4491 6.5111,8.5001 C6.4601,8.6731 6.4171,8.8181 6.3881,8.9271 C6.1801,9.7101 6.1671,10.5181 6.1461,11.7411 L6.1421,12.0071 C6.1171,13.4401 7.5951,15.5441 7.6471,15.6191 C8.6401,17.1861 9.0491,17.1861 9.1831,17.1861 C12.3711,17.1861 15.1031,17.6001 15.1281,17.6041 C15.1801,17.6131 20.2691,18.4311 21.1971,18.6771 C22.1851,18.9381 25.4241,19.3271 26.4711,19.4141 C27.2981,19.4821 29.0421,19.5481 29.5281,19.3991 C29.8421,19.3021 30.2901,18.8161 31.1771,17.7621 C31.3511,17.5551 31.4991,17.3791 31.5931,17.2781 C31.8971,16.9501 33.0921,15.0541 33.0921,14.6231 C33.0921,14.3501 33.0201,13.8791 33.0131,13.8311 C33.0121,13.8261 32.9311,13.2471 32.9791,12.5071 C32.9981,12.2081 33.0931,11.7721 33.1821,11.4861 C33.2671,11.5931 33.3621,11.7211 33.4421,11.8291 C33.6611,12.1231 33.9091,12.4571 34.1541,12.7041 C34.5871,13.1381 34.6921,13.3111 34.7131,13.3521 C34.8071,13.5381 34.9871,13.6421 35.2061,13.6471 C35.7641,13.6381 37.1241,13.6221 37.7011,13.6691 C38.2701,13.7171 39.0531,14.2161 40.0271,15.1541 C40.0941,15.2181 40.1421,15.2631 40.1681,15.2851 C40.3651,15.4491 40.8881,15.7701 41.1591,15.8561 C41.2981,15.8991 41.3511,16.0461 41.3121,16.2811 C41.2441,16.6891 41.0651,17.7721 40.6071,17.9911 C40.3121,18.1301 39.7951,18.2871 39.3381,18.4241 C38.8451,18.5731 38.5341,18.6681 38.3791,18.7521 C38.3501,18.7671 37.6691,19.1131 37.2841,19.7221 L37.1421,19.9471 C35.2801,22.8761 35.1131,23.2791 35.0951,23.4751 C35.0021,24.4601 35.1401,26.3541 35.5821,28.0661 C36.0451,29.8621 36.8271,31.4451 36.9511,31.6311 C36.9791,31.6721 37.1061,31.8821 37.2891,32.1821 C37.8561,33.1131 38.9121,34.8451 39.2791,35.3421 C39.5441,35.7011 41.3841,37.9831 41.7091,38.1861 C42.0061,38.3721 42.4911,38.5031 43.0061,38.5401 C43.2081,38.5531 43.3501,38.6231 43.4541,38.7561 C43.6451,39.0041 43.6701,39.4341 43.6381,39.7271 M2.9541,38.2411 C3.1531,38.3271 3.6391,38.5551 3.9191,38.7231 C4.0691,38.8131 4.1971,39.1471 4.2241,39.5211 C4.2051,39.5621 4.0621,39.6301 3.9541,39.6481 C3.9471,39.6491 3.1651,39.7061 2.4251,39.6771 C1.9201,39.6581 1.9031,39.6401 1.8201,39.5581 C1.7851,39.5231 1.7461,39.4841 1.7231,39.4681 C1.6431,39.3461 1.4981,38.7451 1.3921,38.3051 C1.2391,37.6661 1.0801,37.0051 0.9001,36.6611 C0.6381,36.1611 0.6731,36.0471 0.7761,35.7111 C0.8141,35.5891 0.8931,35.3751 0.9881,35.1191 C1.3001,34.2741 1.5611,33.5421 1.6041,33.1361 C1.6291,32.9031 1.7331,32.4151 1.8441,31.8971 C1.9871,31.2291 2.1491,30.4721 2.1961,29.9971 C2.2321,29.6371 2.4081,29.4701 2.7701,29.1571 L2.9401,29.0081 C3.9891,28.0691 4.6861,27.1071 5.0931,26.4561 C5.3151,27.1661 5.5771,27.8371 5.8801,28.4491 C6.0511,28.7931 5.6881,29.7851 5.3861,30.3521 C5.0601,30.9941 4.1691,32.7241 3.9631,33.0261 C3.9281,33.0771 3.9011,33.1311 3.8741,33.1861 C3.0601,34.4641 2.3501,35.7701 2.2761,36.1391 C2.2111,36.4641 2.4951,38.0451 2.9541,38.2411 M44.0071,38.3301 C43.7821,38.0391 43.4531,37.8711 43.0551,37.8421 C42.5761,37.8091 42.2291,37.6881 42.0911,37.6021 C41.8601,37.4211 40.2501,35.4811 39.8411,34.9271 C39.4921,34.4551 38.4071,32.6741 37.8861,31.8191 C37.6951,31.5051 37.5611,31.2881 37.5331,31.2451 C37.4661,31.1431 36.7161,29.6651 36.2581,27.8921 C35.8361,26.2571 35.7031,24.4651 35.7851,23.5711 C35.8301,23.4151 36.2041,22.7231 37.7311,20.3211 L37.8741,20.0951 C38.1541,19.6541 38.6871,19.3801 38.7021,19.3721 C38.8131,19.3111 39.1991,19.1961 39.5391,19.0931 C40.0201,18.9491 40.5651,18.7851 40.9071,18.6221 C41.5991,18.2911 41.8421,17.3561 42.0011,16.3951 C42.1181,15.6881 41.7331,15.3041 41.3671,15.1891 C41.2091,15.1391 40.7641,14.8731 40.6151,14.7481 C40.5961,14.7321 40.5601,14.6981 40.5121,14.6501 C39.8041,13.9701 38.7491,13.0561 37.7591,12.9731 C37.1811,12.9251 35.8991,12.9371 35.2841,12.9481 C35.1701,12.7671 34.9611,12.5241 34.6491,12.2101 C34.4391,12.0001 34.2071,11.6881 34.0031,11.4121 C33.5721,10.8311 33.3341,10.5131 32.9901,10.6121 C32.4251,10.7731 32.2831,12.4461 32.2821,12.4621 C32.2291,13.2741 32.3171,13.9041 32.3221,13.9331 C32.3421,14.0631 32.3931,14.4381 32.3961,14.5851 C32.3361,14.8551 31.4091,16.4501 31.0811,16.8031 C30.9821,16.9101 30.8261,17.0951 30.6421,17.3131 C30.3101,17.7071 29.5321,18.6321 29.3221,18.7321 C29.0511,18.8151 27.6151,18.8081 26.5291,18.7171 C25.4641,18.6281 22.2901,18.2441 21.3761,18.0021 C20.4141,17.7471 15.4501,16.9491 15.2371,16.9151 C15.2091,16.9111 12.4511,16.4911 9.2241,16.4871 C9.0521,16.3841 8.6021,15.8201 8.2281,15.2301 C7.8361,14.6751 6.8231,13.0181 6.8401,12.0201 L6.8451,11.7521 C6.8651,10.5811 6.8771,9.8061 7.0631,9.1061 C7.0901,9.0021 7.1311,8.8661 7.1801,8.7021 C7.5111,7.5961 8.2001,5.2951 7.7941,3.2141 C7.2531,0.4441 5.7671,0.0521 5.2931,0.1391 C4.9481,0.2001 4.3751,0.4481 4.4091,1.4431 C4.4231,1.8371 4.6171,2.2721 4.8421,2.7751 C5.0541,3.2511 5.2951,3.7911 5.3731,4.3151 C5.5311,5.3721 5.3161,6.7411 4.7881,8.0601 C4.7541,8.1411 3.9361,10.0741 3.9531,11.8671 C3.9721,13.8251 4.5991,16.1091 5.5601,17.7501 C5.2421,18.3931 4.2191,20.6201 4.3391,22.3771 C4.4121,23.4561 4.5811,24.5181 4.8311,25.5231 C4.6051,25.9521 3.8531,27.2521 2.4741,28.4881 L2.3131,28.6291 C1.9461,28.9471 1.5671,29.2761 1.5011,29.9271 C1.4581,30.3641 1.3001,31.1011 1.1611,31.7501 C1.0411,32.3101 0.9381,32.7931 0.9091,33.0621 C0.8721,33.4151 0.5481,34.2941 0.3331,34.8761 C0.2321,35.1491 0.1481,35.3771 0.1091,35.5061 C-0.0289,35.9551 -0.0949,36.2671 0.2811,36.9851 C0.4211,37.2521 0.5761,37.8981 0.7141,38.4681 C0.9471,39.4411 1.0461,39.7961 1.2321,39.9611 C1.2701,39.9961 1.3001,40.0251 1.3261,40.0511 C1.5751,40.3011 1.7361,40.3491 2.3981,40.3741 C2.5571,40.3811 2.7171,40.3831 2.8711,40.3831 C3.4721,40.3831 3.9841,40.3461 4.0301,40.3421 C4.4841,40.2781 4.9571,39.9761 4.9211,39.4681 C4.9041,39.2331 4.8081,38.4421 4.2781,38.1241 C3.9831,37.9471 3.5191,37.7271 3.2921,37.6261 C3.1571,37.3951 2.9331,36.4931 2.9611,36.2761 C2.9951,36.1201 3.3461,35.4001 3.8901,34.4701 C3.9561,34.6361 4.0421,34.8021 4.1521,34.9661 C5.0871,36.3581 6.5671,38.8731 6.8831,39.4211 C7.4991,40.4891 8.1751,40.4561 8.2171,40.4521 C8.4501,40.4521 9.6221,40.4501 9.8221,40.4281 L9.8871,40.4231 C10.1041,40.4121 10.5081,40.3881 10.7601,40.0931 C10.8591,39.9771 10.9701,39.7711 10.9361,39.4521 C10.8391,38.5071 10.3801,38.1901 10.0121,38.0891 C9.8541,38.0461 9.6071,37.9871 9.3891,37.9351 C9.2721,37.9071 9.1631,37.8811 9.0841,37.8611 C8.7961,37.4441 7.7991,35.4521 7.7381,35.1701 C7.7341,35.1191 7.7281,35.0711 7.7221,35.0251 C7.7021,34.8771 7.6941,34.8161 8.0241,34.5241 C8.6181,33.9981 11.5321,30.3331 12.5931,28.8961 C12.7031,28.7481 13.1381,28.7911 13.3231,28.8091 C13.4061,28.8181 13.4741,28.8201 13.5001,28.8231 C13.5691,28.8301 13.9731,28.9061 14.4401,28.9941 C16.4051,29.3651 20.9331,30.2181 23.3461,30.3071 C23.1121,30.8081 22.6581,32.0131 22.1221,33.7081 C22.1091,33.7511 22.0911,33.7991 22.0721,33.8501 C21.9581,34.1551 21.7671,34.6651 21.9511,35.3271 C22.0231,35.5841 22.1081,35.9891 22.2071,36.4561 C22.4301,37.5111 22.7061,38.8191 23.0561,39.5751 C23.1261,39.8991 23.4511,40.4231 24.2861,40.4431 L25.2101,40.4601 C25.2571,40.4641 25.3251,40.4691 25.4071,40.4691 C25.7241,40.4691 26.2391,40.4041 26.4041,40.0021 C26.5631,39.6161 26.3751,38.9251 26.1691,38.6791 C25.9101,38.3721 25.5761,38.2721 25.3321,38.2001 C25.2701,38.1811 25.1891,38.1571 25.1491,38.1381 C25.0241,37.8591 24.7031,36.4711 24.6631,35.9571 C24.7041,35.8421 24.9231,35.4911 25.2631,35.0791 C25.8751,34.3351 26.9481,33.3791 27.8951,32.5351 C28.5631,31.9381 29.1571,31.4091 29.5071,31.0271 C30.7201,31.7401 31.9981,32.6601 33.1831,33.5481 C33.4911,33.7791 33.7431,33.9431 34.0351,34.1321 C34.1681,34.2191 34.3121,34.3121 34.4761,34.4211 C35.1031,34.8391 35.7701,35.2931 36.4271,35.8361 C37.8331,37.0001 39.8981,39.3081 39.9041,39.3151 C40.1141,39.5821 40.8461,40.4541 41.4501,40.4541 C41.7551,40.4541 42.0281,40.4561 42.2721,40.4571 C43.7231,40.4681 44.2141,40.4691 44.3071,39.9731 C44.3261,39.8701 44.4831,38.9451 44.0071,38.3301" id="Fill-20" fill="#010202" mask="url(#mask-4)"></path>
    </svg>










  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
