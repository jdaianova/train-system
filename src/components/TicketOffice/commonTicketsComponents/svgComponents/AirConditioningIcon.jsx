const AirConditioningIcon = ({width, height, color}) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.0993 11.641C7.71469 11.8691 7.35884 12.0788 7.00299 12.2885C6.38474 12.6527 5.77369 13.0205 5.15184 13.3774C5.02963 13.4473 4.9865 13.5319 4.97931 13.6643C4.93258 14.3964 4.87867 15.1321 4.82834 15.8642C4.79959 16.2946 4.49406 16.5889 4.08788 16.5742C3.69249 16.5595 3.40134 16.2284 3.41572 15.798C3.4301 15.4632 3.45526 15.1248 3.47683 14.79C3.48402 14.6576 3.4912 14.5251 3.49839 14.3633C3.39056 14.4258 3.30789 14.47 3.22521 14.5178C2.68245 14.8378 2.13969 15.1616 1.59333 15.4816C1.31296 15.6435 0.989462 15.603 0.759416 15.3897C0.547343 15.1947 0.453887 14.8489 0.590477 14.584C0.66596 14.4369 0.795361 14.2934 0.935545 14.2051C1.49269 13.8556 2.06061 13.5319 2.62494 13.1971C2.67526 13.1677 2.72558 13.1346 2.79388 13.0941C2.36973 12.8807 1.96715 12.6821 1.56457 12.4798C1.21232 12.2995 1.05776 11.9537 1.1584 11.5969C1.28061 11.1738 1.73351 10.9604 2.13969 11.1554C2.80107 11.4718 3.45526 11.8029 4.10945 12.134C4.23526 12.2002 4.33231 12.1965 4.45452 12.1229C5.3747 11.5711 6.29848 11.0303 7.21866 10.4859C7.26898 10.4564 7.3193 10.4233 7.39479 10.3755C7.1935 10.2578 7.01018 10.1474 6.82686 10.0407C6.03968 9.57354 5.24889 9.11369 4.4653 8.63913C4.32871 8.55452 4.22447 8.56188 4.08788 8.63177C3.45167 8.95918 2.81185 9.27556 2.16844 9.58825C1.78743 9.77587 1.37766 9.63975 1.20153 9.27556C1.01822 8.904 1.16559 8.48462 1.5502 8.28597C1.90245 8.10203 2.25831 7.92913 2.61056 7.74887C2.66448 7.72312 2.7148 7.69369 2.78669 7.65322C2.24393 7.33317 1.72273 7.02415 1.20153 6.71514C1.10448 6.65628 1.00384 6.6011 0.906789 6.53856C0.547343 6.31783 0.428726 5.89478 0.622827 5.54161C0.820522 5.18477 1.24826 5.07073 1.61849 5.2841C2.20079 5.62255 2.7795 5.96835 3.35821 6.31047C3.39415 6.33255 3.4301 6.35094 3.49839 6.39141C3.47683 6.03457 3.45885 5.71084 3.44088 5.38343C3.4301 5.22892 3.41572 5.07809 3.41213 4.92358C3.40494 4.51892 3.69249 4.19519 4.07351 4.17679C4.47249 4.1584 4.7924 4.44534 4.82115 4.85736C4.87507 5.60783 4.92899 6.36198 4.97572 7.11244C4.9829 7.23752 5.02963 7.30742 5.13747 7.36628C6.06843 7.91074 6.99221 8.45887 7.91958 9.00701C7.9699 9.03644 8.02022 9.06587 8.09571 9.10633C8.0993 9.0254 8.10649 8.96654 8.10649 8.91136C8.10649 7.81509 8.10289 6.71514 8.11008 5.61887C8.11008 5.48643 8.06695 5.40918 7.95912 5.3356C7.35165 4.9199 6.74419 4.5042 6.14392 4.08115C5.68742 3.76109 5.72336 3.08788 6.20502 2.83405C6.46023 2.70161 6.71543 2.72368 6.95267 2.88555C7.27617 3.10627 7.59967 3.327 7.92317 3.54773C7.9699 3.58083 8.02022 3.61394 8.10649 3.66912C8.10649 3.57348 8.10649 3.50726 8.10649 3.44472C8.10649 2.78254 8.10289 2.12037 8.10649 1.45819C8.11008 0.957879 8.48031 0.62679 8.93321 0.704044C9.24953 0.755547 9.49036 1.02778 9.51552 1.35886C9.51911 1.40669 9.51552 1.45819 9.51552 1.50601C9.51552 7.41778 9.51552 13.3259 9.51552 19.2376C9.51552 19.6349 9.34658 19.9145 9.03745 20.0175C8.56658 20.1794 8.10649 19.8373 8.1029 19.3149C8.0993 18.6454 8.1029 17.9795 8.1029 17.31C8.1029 17.2438 8.1029 17.1812 8.1029 17.0708C7.85128 17.2438 7.63202 17.3909 7.41635 17.5381C7.26179 17.6447 7.11082 17.7514 6.95267 17.8544C6.58963 18.0972 6.16189 18.0236 5.93903 17.6815C5.70899 17.332 5.80604 16.8943 6.17267 16.6404C6.77295 16.2247 7.37322 15.8127 7.9699 15.3933C8.03101 15.3492 8.09571 15.2535 8.09571 15.1836C8.1029 14.0432 8.10289 12.9028 8.0993 11.7624C8.11008 11.7366 8.10649 11.7072 8.0993 11.641Z"
          fill={color}
        />
        <path
          d="M19.1595 5.619C18.9474 5.87652 18.7137 6.11564 18.5268 6.38787C18.2536 6.79253 17.9697 7.20455 17.7648 7.64968C17.4161 8.40383 17.6102 9.11015 18.2501 9.62885C18.8324 10.1034 19.5153 10.3609 20.2198 10.5706C20.3025 10.5964 20.3888 10.6184 20.4211 10.6295C19.8496 10.887 19.2529 11.1482 18.6634 11.4278C18.4873 11.5124 18.3255 11.6411 18.1746 11.7699C17.621 12.2371 17.4485 12.8478 17.6749 13.5504C17.8619 14.139 18.2141 14.6246 18.5987 15.0881C18.7641 15.2868 18.9438 15.4744 19.1487 15.6988C18.8935 15.6473 18.6778 15.5958 18.4585 15.559C17.8906 15.4634 17.3227 15.3861 16.744 15.456C15.9208 15.559 15.3925 16.0777 15.2774 16.9165C15.1696 17.7111 15.3062 18.48 15.5003 19.2415C15.5111 19.2819 15.5183 19.3224 15.5398 19.4033C15.3421 19.2231 15.1768 19.0649 15.0043 18.9177C14.5657 18.5425 14.1128 18.193 13.588 17.9576C12.7649 17.5897 12.0496 17.792 11.5212 18.5388C11.1402 19.0759 10.9066 19.6829 10.7197 20.312C10.7017 20.3672 10.6873 20.426 10.6514 20.4738C10.6514 19.2562 10.6514 18.0422 10.6514 16.8098C12.5744 16.7436 14.156 15.9674 15.3565 14.4296C16.2587 13.2708 16.6901 11.9354 16.6505 10.4529C16.5643 7.06844 13.7965 4.41973 10.6586 4.43812C10.6586 3.16527 10.6586 1.89242 10.6586 0.579102C10.6873 0.656356 10.7053 0.700501 10.7161 0.744646C10.9389 1.46568 11.2013 2.16833 11.6434 2.78268C12.1574 3.49268 12.844 3.68765 13.642 3.34553C14.289 3.06962 14.8245 2.63185 15.3206 2.13522C15.3889 2.06532 15.4572 1.9991 15.5255 1.92921C15.5326 1.92185 15.547 1.92185 15.5614 1.91817C15.4967 2.28605 15.4068 2.65024 15.3781 3.01812C15.3421 3.49268 15.3134 3.9746 15.3601 4.44548C15.4392 5.24377 15.9748 5.75144 16.7584 5.8618C17.5024 5.96481 18.2249 5.84341 18.9438 5.65579C19.0085 5.6374 19.0696 5.62268 19.1343 5.60797C19.1379 5.60797 19.1451 5.61165 19.1595 5.619Z"
          fill={color}
        />
        <path
          d="M10.655 15.5333C10.655 12.2666 10.655 8.99614 10.655 5.69629C12.3624 5.77722 13.7427 6.47986 14.6521 7.95505C15.752 9.73925 15.7268 11.5749 14.6233 13.3555C13.5594 15.0624 11.701 15.6069 10.655 15.5333Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default AirConditioningIcon;
