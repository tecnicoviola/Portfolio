'use client'

import { motion } from 'framer-motion'

// Database
export default function Database({ className }: { className?: string }) {
  return (
    <motion.svg
      // width="364"
      // height="405"
      fill="none"
      viewBox="0 0 364 405"
      className={className}
    >
      {/* Grid */}
      <motion.path
        fill="url(#paint0_radial_45_35)"
        fillRule="evenodd"
        d="M354 378.035c-1.05.008-2.102.012-3.155.013v26.385h-1.155v-26.385c-26.846-.029-52.879-2.068-77.669-5.87l-11.885 25.607-1.048-.486 11.744-25.305c-25.561-3.985-49.79-9.848-72.216-17.317l-23.074 23.072-.817-.817 22.666-22.665c-22.605-7.61-43.36-16.856-61.776-27.46l-32.735 18.898-.578-1.001 32.159-18.565c-18.244-10.618-34.17-22.583-47.287-35.621L47.11 303.873l-.366-1.097 39.517-13.171c-12.753-12.853-22.784-26.734-29.63-41.381l-44.607 6.901-.177-1.142 44.281-6.85c-6.444-14.152-9.917-29.01-10.002-44.339H0v-1.155h46.126c.085-15.33 3.559-30.187 10.002-44.339l-44.281-6.85.177-1.142 44.608 6.9c6.845-14.646 16.876-28.527 29.63-41.38l-39.518-13.172.366-1.096 40.064 13.354c13.117-13.037 29.043-25.003 47.287-35.62l-32.159-18.566.578-1 32.735 18.898c18.416-10.604 39.171-19.85 61.776-27.46L174.725 27.5l.817-.817 23.074 23.072c22.426-7.469 46.655-13.331 72.216-17.316L259.088 7.134l1.048-.487 11.885 25.608c24.79-3.803 50.823-5.841 77.669-5.87V0h1.155v26.385c1.053 0 2.105.005 3.155.012v1.156c-1.05-.007-2.102-.012-3.155-.013v12.326c1.053.001 2.105.006 3.155.014v1.155a494.28 494.28 0 00-3.155-.014v12.326c1.053.001 2.105.006 3.155.015v1.155c-1.05-.008-2.102-.013-3.155-.015v12.326c1.054.002 2.105.007 3.155.016V68c-1.05-.01-2.101-.015-3.155-.016v12.325c1.054.002 2.105.008 3.155.019v1.155c-1.05-.01-2.101-.017-3.155-.018V93.79c1.054.002 2.106.009 3.155.02v1.156a327.48 327.48 0 00-3.155-.02v12.326c1.054.002 2.106.009 3.155.023v1.156a275.653 275.653 0 00-3.155-.024v12.326c1.055.002 2.106.011 3.155.027v1.156c-1.049-.016-2.1-.025-3.155-.028v12.326c1.055.003 2.107.014 3.155.033v1.156c-1.048-.02-2.1-.031-3.155-.034v12.326c1.056.004 2.108.018 3.155.041v1.156a157.168 157.168 0 00-3.155-.041v12.326c1.058.005 2.109.023 3.155.054v1.157a121.99 121.99 0 00-3.155-.056v12.326c1.061.008 2.112.035 3.155.083v1.156a80.042 80.042 0 00-3.155-.083v23.765l3.155-6.797v2.745l-1.836 3.956 1.836-1.836v1.634l-.221.221.221-.128v5.644l-.221-.127.221.22v1.635l-1.836-1.837 1.836 3.957v2.745l-3.155-6.797v23.765a82.007 82.007 0 003.155-.084v1.157a82.08 82.08 0 01-3.155.082v12.326a117.68 117.68 0 003.155-.055v1.156c-1.046.032-2.097.05-3.155.055v12.326a173.61 173.61 0 003.155-.041v1.155c-1.047.024-2.099.038-3.155.041v12.326c1.055-.003 2.107-.014 3.155-.033v1.156c-1.048.019-2.1.03-3.155.033v12.325c1.055-.002 2.106-.011 3.155-.027v1.156c-1.049.015-2.1.024-3.155.027v12.326c1.054-.003 2.106-.01 3.155-.024v1.156c-1.049.013-2.101.021-3.155.023v12.326c1.054-.002 2.106-.009 3.155-.021v1.156c-1.049.012-2.101.018-3.155.02v12.326c1.054-.002 2.105-.008 3.155-.018v1.155c-1.05.011-2.101.017-3.155.018v12.326a413.72 413.72 0 003.155-.016v1.155c-1.05.01-2.101.015-3.155.017v12.325c1.053-.001 2.105-.006 3.155-.015v1.156c-1.05.008-2.102.013-3.155.015v12.325a551.88 551.88 0 003.155-.013v1.155c-1.05.008-2.102.013-3.155.014v12.325c1.053-.001 2.105-.005 3.155-.012v1.155zm-4.31-337.014v12.326c-22.665.029-44.644 1.75-65.579 4.958l-5.538-11.934c22.701-3.463 46.536-5.321 71.117-5.35zm0 13.481v12.326c-20.575.029-40.527 1.592-59.533 4.502l-5.539-11.934c20.773-3.166 42.581-4.865 65.072-4.894zm0 13.482v12.325c-18.484.029-36.41 1.433-53.488 4.046l-5.539-11.934c18.845-2.868 38.627-4.409 59.027-4.437zm0 13.48V93.79c-16.393.029-32.293 1.274-47.443 3.59l-5.539-11.934c16.917-2.57 34.672-3.953 52.982-3.981zm0 13.482v12.326c-14.303.028-28.176 1.115-41.398 3.133l-5.538-11.934c14.988-2.273 30.717-3.497 46.936-3.525zm0 13.481v12.326c-12.212.028-24.059.956-35.352 2.677l-5.539-11.934c13.06-1.976 26.763-3.041 40.891-3.069zm0 13.481v12.326c-10.122.028-19.942.798-29.307 2.221l-5.539-11.933c11.132-1.679 22.808-2.586 34.846-2.614zm0 13.481v12.326c-8.031.028-15.825.639-23.262 1.765l-5.538-11.933c9.204-1.382 18.853-2.13 28.8-2.158zm0 13.482v12.326c-5.941.027-11.709.48-17.217 1.308l-5.538-11.933a158.313 158.313 0 0122.755-1.701zm0 13.481v12.326c-3.85.027-7.592.321-11.171.852l-5.538-11.932a118.555 118.555 0 0116.709-1.246zm-77.163 208.734c24.63 3.761 50.491 5.778 77.163 5.806v-12.325c-24.756-.029-48.762-1.909-71.624-5.414l-5.539 11.933zm6.046-13.025c22.701 3.464 46.536 5.322 71.117 5.35v-12.325c-22.665-.029-44.644-1.75-65.579-4.958l-5.538 11.933zm6.045-13.025c20.773 3.166 42.581 4.866 65.072 4.894v-12.325c-20.575-.029-40.527-1.592-59.533-4.502l-5.539 11.933zm6.045-13.025c18.845 2.869 38.627 4.409 59.027 4.438v-12.326c-18.484-.028-36.41-1.432-53.488-4.045l-5.539 11.933zm6.046-13.025c16.916 2.571 34.672 3.953 52.981 3.982v-12.326c-16.393-.028-32.293-1.274-47.443-3.589l-5.538 11.933zm6.045-13.025c14.988 2.274 30.717 3.497 46.936 3.526v-12.326c-14.303-.028-28.176-1.115-41.398-3.133l-5.538 11.933zm6.045-13.025c13.06 1.976 26.763 3.041 40.891 3.07V283.68c-12.212-.028-24.059-.957-35.352-2.677l-5.539 11.933zm6.045-13.025c11.133 1.679 22.808 2.585 34.846 2.613v-12.325c-10.122-.028-19.942-.798-29.307-2.221l-5.539 11.933zm6.046-13.025c9.204 1.381 18.853 2.129 28.8 2.157v-12.326c-8.031-.028-15.825-.639-23.262-1.764l-5.538 11.933zm6.045-13.025a158.468 158.468 0 0022.755 1.701v-12.326a119.786 119.786 0 01-17.217-1.308l-5.538 11.933zm6.046-13.026a118.707 118.707 0 0016.709 1.245v-12.326a79.902 79.902 0 01-11.171-.852l-5.538 11.933zm6.045-13.026c3.418.491 6.988.764 10.664.79v-23.765l-10.664 22.975zm-1.19-.181l10.535-22.699-20.384 20.383a68.582 68.582 0 009.849 2.316zm-.505 1.088a69.05 69.05 0 01-10.262-2.485l-10.761 10.76c4.832 1.56 10.022 2.798 15.483 3.662l5.54-11.937zm-11.482-2.899l-10.769 10.768c-4.794-1.622-9.218-3.564-13.185-5.775l15.35-8.862c2.596 1.473 5.483 2.773 8.604 3.869zm5.436 15.926c-5.609-.905-10.938-2.201-15.894-3.835l-10.762 10.761c6.58 2.143 13.661 3.837 21.117 5.009l5.539-11.935zm-17.115-4.248l-10.768 10.767c-6.565-2.214-12.614-4.879-18.02-7.919l15.351-8.862c4.036 2.303 8.546 4.325 13.437 6.014zm11.07 17.273c-7.604-1.213-14.823-2.966-21.526-5.183l-10.763 10.762c8.328 2.725 17.298 4.876 26.75 6.356l5.539-11.935zm-22.749-5.595l-10.767 10.766c-8.336-2.806-16.01-6.193-22.855-10.062l15.352-8.864c5.474 3.133 11.608 5.879 18.27 8.16zm16.704 18.62c-9.599-1.521-18.709-3.73-27.159-6.531l-10.763 10.762c10.075 3.308 20.936 5.916 32.382 7.704l5.54-11.935zm-28.382-6.942l-10.766 10.765c-10.109-3.398-19.407-7.507-27.691-12.206l15.353-8.864c6.913 3.963 14.671 7.431 23.104 10.305zm22.336 19.968c-11.594-1.83-22.593-4.496-32.79-7.88l-10.763 10.762c11.822 3.892 24.572 6.956 38.014 9.052l5.539-11.934zm-34.014-8.291l-10.766 10.765c-11.88-3.99-22.803-8.821-32.525-14.351l15.353-8.863c8.351 4.793 17.734 8.983 27.938 12.449zm27.969 21.316c-13.589-2.138-26.478-5.26-38.423-9.228l-10.763 10.762c13.569 4.475 28.21 7.996 43.647 10.4l5.539-11.934zm-39.647-9.639l-10.765 10.765c-13.652-4.582-26.2-10.136-37.36-16.495l15.354-8.864c9.788 5.623 20.796 10.536 32.771 14.594zm33.602 22.664c-15.585-2.446-30.364-6.025-44.056-10.576l-10.763 10.762c15.316 5.059 31.847 9.036 49.279 11.748l5.54-11.934zm-45.279-10.987l-10.766 10.765c-15.423-5.174-29.596-11.45-42.194-18.639l15.354-8.864c11.226 6.453 23.858 12.088 37.606 16.738zm39.233 24.012c-17.579-2.754-34.249-6.79-49.687-11.924l-10.763 10.762c17.063 5.642 35.484 10.076 54.911 13.096l5.539-11.934zm-50.911-12.335l-10.765 10.765c-17.196-5.766-32.993-12.764-47.029-20.783l15.354-8.865c12.665 7.284 26.921 13.641 42.44 18.883zm44.866 25.36c-19.575-3.062-38.134-7.554-55.32-13.273l-10.763 10.763c18.81 6.226 39.121 11.116 60.544 14.444l5.539-11.934zm-56.544-13.683l-10.765 10.765c-18.967-6.358-36.389-14.078-51.863-22.928l15.354-8.864c14.103 8.114 29.984 15.193 47.274 21.027zm50.499 26.708c-21.57-3.369-42.02-8.319-60.952-14.621l-10.764 10.763c20.558 6.809 42.759 12.156 66.177 15.792l5.539-11.934zm-62.176-15.031l-10.765 10.765c-20.739-6.95-39.786-15.393-56.698-25.072l15.354-8.864c15.541 8.943 33.046 16.745 52.109 23.171zm56.131 28.056c-23.566-3.677-45.905-9.083-66.585-15.969l-10.763 10.763c22.304 7.393 46.395 13.196 71.809 17.14l5.539-11.934zm-67.809-16.379l-10.765 10.765c-22.51-7.542-43.182-16.707-61.532-27.216l15.355-8.865c16.978 9.774 36.108 18.298 56.942 25.316zM88.401 290.109c13.089 12.93 28.983 24.81 47.214 35.363l15.358-8.866c-16.806-9.787-31.481-20.815-43.573-32.829l-18.999 6.332zm20.226-6.741c12.064 11.906 26.707 22.849 43.5 32.572l15.358-8.867c-15.369-8.956-28.793-19.046-39.859-30.038l-18.999 6.333zm20.227-6.742c11.038 10.884 24.429 20.888 39.784 29.781l15.359-8.866c-13.931-8.127-26.104-17.279-36.145-27.248l-18.998 6.333zm20.226-6.742c10.013 9.861 22.153 18.928 36.07 26.991l15.359-8.867c-12.494-7.296-23.415-15.51-32.431-24.456l-18.998 6.332zm20.227-6.742c8.987 8.839 19.876 16.968 32.355 24.2l15.359-8.867c-11.056-6.466-20.726-13.742-28.716-21.665l-18.998 6.332zm20.226-6.741c7.962 7.815 17.6 15.006 28.641 21.409l15.359-8.868c-9.618-5.636-18.038-11.973-25.002-18.874l-18.998 6.333zm20.227-6.742c6.936 6.793 15.322 13.046 24.926 18.618l15.359-8.867c-8.181-4.806-15.349-10.206-21.288-16.083l-18.997 6.332zm20.227-6.742c5.91 5.77 13.045 11.086 21.21 15.827l15.361-8.867c-6.744-3.976-12.661-8.438-17.575-13.292l-18.996 6.332zm20.227-6.742c4.884 4.748 10.768 9.126 17.495 13.037l15.362-8.869c-5.308-3.144-9.974-6.668-13.861-10.5l-18.996 6.332zm20.227-6.742c3.859 3.726 8.491 7.166 13.78 10.246l15.363-8.869c-3.872-2.314-7.287-4.9-10.148-7.709l-18.995 6.332zm20.229-6.743c2.831 2.704 6.212 5.207 10.063 7.456l15.367-8.871c-2.439-1.482-4.604-3.13-6.437-4.915l-18.993 6.33zm20.232-6.744c1.802 1.684 3.93 3.25 6.343 4.668l27.793-16.045-34.136 11.377zm-.929-.908l33.612-11.203-37.575 5.812c.971 1.888 2.306 3.694 3.963 5.391zm-1.212.404c-1.649-1.756-2.984-3.634-3.953-5.609l-21.365 3.305c1.51 3.038 3.636 5.935 6.303 8.642l19.015-6.338zm-4.448-6.702l-21.383 3.308c-1.319-2.973-2.052-6.072-2.131-9.254h22.199c.071 2.051.525 4.04 1.315 5.946zm-15.783 13.445c-2.654-2.765-4.779-5.734-6.285-8.862l-21.366 3.306c2.046 4.189 4.963 8.177 8.64 11.893l19.011-6.337zm-6.783-9.954l-21.379 3.307c-1.833-4.087-2.841-8.356-2.922-12.744h22.197c.077 3.259.804 6.417 2.104 9.437zm-13.446 16.697c-3.662-3.775-6.576-7.835-8.618-12.114l-21.367 3.305c2.581 5.34 6.289 10.419 10.977 15.145l19.008-6.336zm-9.117-13.206l-21.377 3.307c-2.348-5.201-3.631-10.641-3.713-16.235h22.196c.08 4.466 1.081 8.795 2.894 12.928zm-11.11 19.948c-4.671-4.784-8.377-9.935-10.952-15.366l-21.368 3.305c3.115 6.492 7.614 12.662 13.313 18.396l19.007-6.335zm-11.453-16.458l-21.376 3.307c-2.862-6.315-4.42-12.924-4.503-19.725h22.196c.081 5.673 1.357 11.171 3.683 16.418zm-8.775 23.2c-5.68-5.792-10.176-12.035-13.286-18.618l-21.368 3.305c3.649 7.644 8.939 14.905 15.649 21.648l19.005-6.335zm-13.787-19.71l-21.375 3.307c-3.378-7.428-5.21-15.207-5.294-23.215h22.196c.083 6.88 1.633 13.548 4.473 19.908zm-6.439 26.452c-6.691-6.801-11.978-14.135-15.621-21.87l-21.369 3.305c4.183 8.796 10.264 17.148 17.985 24.9l19.005-6.335zm-16.123-22.962l-21.374 3.307c-3.893-8.541-6-17.49-6.084-26.705h22.196c.083 8.087 1.908 15.925 5.262 23.398zm-4.104 29.704c-7.701-7.81-13.778-16.235-17.955-25.122l-21.369 3.306c4.716 9.947 11.589 19.39 20.319 28.15l19.005-6.334zm-18.458-26.214l-21.374 3.307c-4.408-9.655-6.789-19.774-6.874-30.195h22.196c.084 9.294 2.183 18.302 6.052 26.888zm-1.768 32.956c-8.711-8.819-15.58-18.335-20.291-28.374l-21.368 3.306c5.249 11.098 12.913 21.633 22.654 31.402l19.005-6.334zm-20.793-29.465L125 236.479c-4.923-10.768-7.579-22.057-7.664-33.685h22.196c.084 10.501 2.458 20.679 6.842 30.379zm.566 36.207c-9.721-9.828-17.38-20.435-22.625-31.626l-21.369 3.306c5.783 12.25 14.238 23.876 24.99 34.654l19.004-6.334zm-23.128-32.717l-21.373 3.306c-5.438-11.881-8.37-24.34-8.455-37.175h22.196c.085 11.708 2.734 23.056 7.632 33.869zm2.902 39.458c-10.732-10.835-19.182-22.534-24.96-34.877l-21.37 3.306c6.318 13.402 15.563 26.119 27.326 37.906l19.004-6.335zm-25.463-35.968l-21.373 3.306c-5.954-12.994-9.16-26.623-9.245-40.665H92.83c.085 12.915 3.008 25.433 8.422 37.359zm5.236 42.71c-11.742-11.844-20.983-24.634-27.294-38.129l-21.37 3.306c6.85 14.554 16.887 28.362 29.66 41.157l19.004-6.334zm-27.797-39.22l-21.373 3.306c-6.47-14.107-9.95-28.906-10.035-44.155h22.196c.085 14.122 3.283 27.81 9.212 40.849zm-21.373-86.159c-6.47 14.107-9.95 28.906-10.035 44.155h22.196c.085-14.123 3.283-27.81 9.212-40.849l-21.373-3.306zm22.56 3.49c-5.953 12.994-9.158 26.622-9.244 40.665H92.83c.085-12.916 3.008-25.433 8.422-37.359l-21.373-3.306zm22.562 3.49c-5.438 11.881-8.37 24.339-8.455 37.175h22.196c.085-11.709 2.734-23.056 7.632-33.869l-21.373-3.306zm22.561 3.49c-4.923 10.767-7.579 22.056-7.664 33.685h22.196c.084-10.502 2.458-20.68 6.842-30.379L125 167.954zm22.561 3.49c-4.408 9.654-6.789 19.773-6.874 30.195h22.196c.084-9.295 2.183-18.303 6.052-26.889l-21.374-3.306zm22.562 3.49c-3.893 8.541-6 17.49-6.084 26.705h22.196c.083-8.087 1.908-15.926 5.262-23.399l-21.374-3.306zm22.561 3.49c-3.378 7.428-5.21 15.207-5.294 23.215h22.196c.083-6.88 1.633-13.549 4.473-19.909l-21.375-3.306zm22.561 3.49c-2.862 6.314-4.42 12.924-4.503 19.725h22.196c.081-5.673 1.357-11.172 3.683-16.418l-21.376-3.307zm22.562 3.49c-2.348 5.201-3.631 10.64-3.713 16.235h22.196c.08-4.466 1.081-8.795 2.894-12.928l-21.377-3.307zm22.561 3.49c-1.833 4.087-2.841 8.357-2.922 12.745h22.197c.077-3.259.804-6.418 2.104-9.438l-21.379-3.307zm22.562 3.49c-1.319 2.973-2.052 6.073-2.131 9.255h22.199c.071-2.051.525-4.041 1.315-5.947l-21.383-3.308zm22.563 3.491c-.806 1.858-1.264 3.788-1.339 5.764h38.6l-37.261-5.764zm.517-1.09l37.575 5.813-33.612-11.204c-1.657 1.697-2.992 3.503-3.963 5.391zm-1.202-.186c.969-1.974 2.304-3.852 3.953-5.608l-19.015-6.338c-2.667 2.706-4.793 5.604-6.303 8.641l21.365 3.305zm4.855-6.526l-18.993-6.33c2.831-2.705 6.212-5.207 10.063-7.457l15.367 8.872c-2.439 1.482-4.604 3.13-6.437 4.915zm-27.418 3.036c1.506-3.127 3.631-6.096 6.285-8.862l-19.011-6.336c-3.677 3.716-6.594 7.704-8.64 11.893l21.366 3.305zm7.191-9.778L270.441 175c3.859-3.726 8.491-7.166 13.78-10.246l15.363 8.869c-3.872 2.314-7.287 4.9-10.148 7.708zm-29.753 6.288c2.042-4.279 4.956-8.339 8.618-12.114l-19.008-6.336c-4.688 4.725-8.396 9.804-10.977 15.145l21.367 3.305zm9.527-13.03l-18.996-6.331c4.884-4.748 10.768-9.126 17.495-13.037l15.362 8.868c-5.308 3.145-9.974 6.669-13.861 10.5zm-32.088 9.54c2.575-5.431 6.281-10.583 10.952-15.367l-19.007-6.335c-5.699 5.735-10.198 11.905-13.313 18.396l21.368 3.306zm11.861-16.281l-18.996-6.332c5.91-5.771 13.045-11.086 21.21-15.828l15.361 8.868c-6.744 3.975-12.661 8.437-17.575 13.292zm-34.423 12.791c3.11-6.583 7.606-12.826 13.286-18.619l-19.005-6.334c-6.71 6.743-12 14.004-15.649 21.647l21.368 3.306zm14.197-19.533l-18.997-6.332c6.936-6.793 15.322-13.046 24.926-18.618l15.359 8.867c-8.181 4.806-15.349 10.206-21.288 16.083zm-36.758 16.043c3.643-7.735 8.93-15.069 15.621-21.87l-19.005-6.335c-7.721 7.752-13.802 16.104-17.984 24.899l21.368 3.306zm16.532-22.785l-18.998-6.332c7.962-7.816 17.6-15.007 28.641-21.409l15.359 8.867c-9.618 5.636-18.038 11.974-25.002 18.874zm-39.093 19.295c4.177-8.887 10.254-17.312 17.955-25.122l-19.005-6.335c-8.73 8.761-15.603 18.204-20.319 28.151l21.369 3.306zm18.867-26.036l-18.998-6.333c8.987-8.838 19.876-16.967 32.355-24.2l15.359 8.867c-11.056 6.467-20.726 13.743-28.716 21.666zm-41.429 22.546c4.711-10.039 11.58-19.556 20.291-28.374l-19.005-6.335c-9.741 9.77-17.405 20.304-22.654 31.403l21.368 3.306zm21.202-29.288l-18.998-6.333c10.013-9.861 22.153-18.927 36.07-26.99l15.359 8.867c-12.494 7.296-23.415 15.51-32.431 24.456zm-43.763 25.798c5.245-11.192 12.904-21.799 22.625-31.626l-19.004-6.334c-10.752 10.778-19.207 22.403-24.99 34.654l21.369 3.306zm23.537-32.54l-18.998-6.332c11.038-10.884 24.429-20.889 39.784-29.782l15.359 8.867c-13.931 8.127-26.104 17.278-36.145 27.247zm-46.098 29.05c5.778-12.343 14.228-24.042 24.96-34.878l-19.004-6.334c-11.763 11.787-21.008 24.503-27.325 37.906l21.369 3.306zm25.872-35.792l-18.999-6.332c12.064-11.907 26.707-22.85 43.5-32.572l15.358 8.866c-15.369 8.957-28.793 19.047-39.859 30.038zm-48.433 32.301c6.311-13.494 15.552-26.284 27.294-38.128l-19.003-6.335c-12.774 12.795-22.81 26.603-29.66 41.158l21.369 3.305zm28.207-39.042l-18.999-6.333c13.089-12.929 28.983-24.81 47.214-35.363l15.358 8.867c-16.806 9.787-31.481 20.814-43.573 32.829zm90.904-69.578c-22.51 7.542-43.182 16.707-61.532 27.216l15.355 8.865c16.978-9.774 36.108-18.299 56.942-25.317l-10.765-10.764zm11.678 11.677c-20.739 6.95-39.786 15.392-56.698 25.072l15.354 8.864c15.541-8.944 33.046-16.746 52.109-23.172l-10.765-10.764zm11.677 11.677c-18.967 6.358-36.389 14.078-51.863 22.927l15.354 8.865c14.103-8.114 29.984-15.194 47.274-21.028l-10.765-10.764zm11.678 11.677c-17.196 5.766-32.993 12.764-47.029 20.783l15.354 8.864c12.665-7.283 26.921-13.64 42.44-18.883L233.337 86.11zm11.677 11.677c-15.423 5.174-29.596 11.45-42.194 18.639l15.354 8.864c11.226-6.454 23.858-12.088 37.606-16.739l-10.766-10.764zm11.678 11.676c-13.652 4.583-26.2 10.136-37.36 16.495l15.354 8.864c9.788-5.623 20.796-10.535 32.771-14.593l-10.765-10.766zm11.677 11.677c-11.88 3.991-22.803 8.822-32.525 14.351l15.353 8.864c8.351-4.793 17.734-8.983 27.938-12.449l-10.766-10.766zm11.678 11.677c-10.109 3.399-19.407 7.508-27.691 12.207l15.353 8.864c6.913-3.963 14.671-7.431 23.104-10.305l-10.766-10.766zm11.677 11.677c-8.336 2.807-16.01 6.194-22.855 10.063l15.352 8.863c5.474-3.133 11.608-5.878 18.27-8.16l-10.767-10.766zm11.678 11.677c-6.565 2.215-12.614 4.879-18.02 7.919l15.351 8.863c4.036-2.303 8.546-4.326 13.437-6.015l-10.768-10.767zm11.678 11.677c-4.794 1.622-9.218 3.565-13.185 5.776l15.35 8.862c2.597-1.474 5.483-2.773 8.604-3.869l-10.769-10.769zm11.678 11.678c-3.023 1.029-5.822 2.25-8.347 3.633l28.345 16.364-19.998-19.997zm1.229-.405l20.384 20.383-10.535-22.698a68.45 68.45 0 00-9.849 2.315zm21.703-3.286a79.019 79.019 0 00-10.664.79l10.664 22.975v-23.765zm-38.788 12.652l34.136 11.378-27.793-16.045c-2.413 1.418-4.541 2.983-6.343 4.667zm-5.409 20.072l37.26-5.764h-38.599c.075 1.976.533 3.906 1.339 5.764zm21.265 16.35l19.998-19.997-28.345 16.364c2.525 1.383 5.324 2.604 8.347 3.633zm.311-46.706a69.174 69.174 0 0110.262-2.486l-5.54-11.937c-5.461.865-10.651 2.103-15.483 3.662l10.761 10.761zm-11.678-11.677c4.956-1.634 10.285-2.93 15.894-3.835l-5.539-11.936c-7.456 1.173-14.537 2.867-21.117 5.01l10.762 10.761zm-11.677-11.677c6.703-2.218 13.922-3.97 21.526-5.183l-5.54-11.936c-9.451 1.481-18.421 3.632-26.749 6.357l10.763 10.762zm-11.678-11.677c8.45-2.801 17.56-5.01 27.159-6.532l-5.54-11.935c-11.446 1.789-22.307 4.396-32.382 7.705l10.763 10.762zm-11.677-11.677c10.197-3.385 21.196-6.051 32.79-7.88l-5.539-11.935c-13.442 2.097-26.192 5.161-38.014 9.053l10.763 10.762zm-11.678-11.677c11.945-3.968 24.834-7.091 38.423-9.228l-5.539-11.935c-15.437 2.405-30.078 5.925-43.647 10.4l10.763 10.763zm-11.678-11.677c13.692-4.551 28.471-8.131 44.056-10.576l-5.54-11.935c-17.432 2.713-33.963 6.69-49.279 11.748l10.763 10.763zm-11.677-11.677c15.438-5.135 32.108-9.17 49.687-11.924l-5.539-11.935c-19.427 3.021-37.848 7.454-54.911 13.096l10.763 10.763zm-11.678-11.677c17.186-5.718 35.745-10.21 55.32-13.272l-5.539-11.935c-21.423 3.329-41.734 8.219-60.544 14.444l10.763 10.763zM221.971 73.11c18.932-6.302 39.382-11.25 60.952-14.62l-5.539-11.935c-23.418 3.637-45.619 8.983-66.177 15.792l10.764 10.763zm-11.678-11.677c20.68-6.885 43.019-12.291 66.585-15.968l-5.539-11.935c-25.414 3.945-49.505 9.748-71.809 17.14l10.763 10.763zM349.69 27.54c-26.672.029-52.533 2.046-77.163 5.806l5.539 11.934c22.862-3.505 46.868-5.385 71.624-5.414V27.54z"
        clipRule="evenodd"
        opacity="0.6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{
          opacity: {
            ease: 'easeInOut',
            duration: 2,
          },
        }}
      ></motion.path>
      {/* Green line 2 */}
      <motion.path
        stroke="url(#paint1_linear_45_35)"
        strokeWidth="1.156"
        d="M350.268 202.216l-138.2-46.064c-2.074-.691-4.372-.163-5.861 1.437-4.813 5.168-8.817 10.624-11.912 16.312-1.231 2.263-3.708 3.614-6.254 3.22l-85.903-13.289"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            delay: 3,
            duration: 2,
            ease: 'easeInOut',
          },
          opacity: {
            duration: 0.5,
          },
        }}
      ></motion.path>
      {/* Green cricle 1a */}
      <motion.circle
        r="7.463"
        fill="#2BCB4E"
        fillOpacity="0.2"
        transform="scale(-1.22477 .70706) rotate(-45 223.903 314.313)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 4,
          duration: 1,
          ease: 'easeInOut',
        }}
      ></motion.circle>
      {/* Green circle 1b */}
      <motion.circle
        r="3.827"
        fill="#2BCB4E"
        stroke="#010B12"
        strokeWidth="1.733"
        transform="scale(-1.22477 .70706) rotate(-45 223.903 314.312)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 4,
          duration: 1,
          ease: 'easeInOut',
        }}
      ></motion.circle>
      {/* Blue line */}
      <motion.path
        stroke="url(#paint2_linear_45_35)"
        strokeWidth="1.156"
        d="M175.135 377.341l75.107-75.104c3.036-3.036 1.817-8.219-2.199-9.738-34.565-13.07-61.168-32.579-74.699-55.574-1.949-3.312.222-7.374 4.019-7.962l52.516-8.123c3.798-.588 5.955-4.664 4.973-8.379a40.837 40.837 0 01-.92-4.487c-.462-3.158 2.167-5.758 5.358-5.758h107.392"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            delay: 1,
            duration: 3,
            ease: 'easeInOut',
          },
          opacity: {
            duration: 0.5,
          },
        }}
      ></motion.path>
      {/* Blue circle 1a */}
      <motion.circle
        r="9.436"
        fill="#52B8F5"
        fillOpacity="0.2"
        transform="scale(-1.22477 .70706) rotate(-45 322.797 331.986)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 1,
          ease: 'easeInOut',
        }}
      ></motion.circle>
      {/* Blue circle 1b */}
      <motion.circle
        r="4.632"
        fill="#52B8F5"
        stroke="#010B12"
        strokeWidth="1.733"
        transform="scale(-1.22477 .70706) rotate(-45 322.798 331.984)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 1,
          ease: 'easeInOut',
        }}
      ></motion.circle>
      {/* Blue circle 2a */}
      <motion.circle
        r="9.919"
        fill="#52B8F5"
        fillOpacity="0.2"
        transform="scale(-1.22477 .70706) rotate(-45 402.306 459.018)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1,
          ease: 'easeInOut',
        }}
      ></motion.circle>
      {/* Blue circle 2b */}
      <motion.circle
        r="4.615"
        fill="#52B8F5"
        stroke="#010B12"
        strokeWidth="1.733"
        transform="scale(-1.22477 .70706) rotate(-45 402.306 459.017)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1,
          ease: 'easeInOut',
        }}
      ></motion.circle>
      {/* Gradient line */}
      <motion.path
        stroke="url(#paint3_linear_45_35)"
        strokeWidth="1.156"
        d="M256.861 202.216c0 29.782 41.819 53.925 93.405 53.925"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            delay: 2.75,
            duration: 1.5,
            ease: 'easeInOut',
          },
          opacity: {
            duration: 0.5,
          },
        }}
      ></motion.path>
      {/* Green line 1 */}
      <motion.path
        stroke="#2BCB4E"
        strokeWidth="1.156"
        d="M350.266 202.216v61.628c0 3.191-2.588 5.786-5.777 5.697a198.416 198.416 0 01-20.149-1.587c-2.552-.334-5.046.994-6.129 3.327l-34.443 74.21"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            delay: 1,
            duration: 2,
            ease: 'easeInOut',
          },
          opacity: {
            delay: 1,
            duration: 0.5,
          },
        }}
      ></motion.path>
      {/* Blue cirle 3a */}
      <motion.circle
        r="7.865"
        fill="#52B8F5"
        fillOpacity="0.2"
        transform="scale(-1.22477 .70706) rotate(-45 240.484 395.87)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3,
          duration: 1,
          ease: 'easeInOut',
        }}
      ></motion.circle>
      {/* Blue circle 3b */}
      <motion.circle
        r="3.204"
        fill="#52B8F5"
        stroke="#010B12"
        strokeWidth="1.733"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3,
          duration: 1,
          ease: 'easeInOut',
        }}
        transform="scale(-1.22477 .70706) rotate(-45 240.485 395.867)"
      ></motion.circle>
      {/* Green circle 2a */}
      <motion.circle
        r="7.848"
        fill="#2BCB4E"
        fillOpacity="0.15"
        transform="scale(-1.22477 .70706) rotate(-45 293.632 526.07)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 4,
          duration: 1,
          ease: 'easeInOut',
        }}
      ></motion.circle>
      {/* Green circle 2b */}
      <motion.circle
        r="3.931"
        fill="#2BCB4E"
        stroke="#010B12"
        strokeWidth="1.733"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 4,
          duration: 1,
          ease: 'easeInOut',
        }}
        transform="scale(-1.22477 .70706) rotate(-45 293.632 526.07)"
      ></motion.circle>
      {/* Green circle 3a */}
      <motion.circle
        r="12.435"
        fill="#2BCB4E"
        fillOpacity="0.15"
        transform="scale(-1.22477 .70706) rotate(-45 474.08 523.759)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3,
          duration: 1,
          ease: 'easeInOut',
        }}
      ></motion.circle>
      {/* Green circle 3b */}
      <motion.circle
        r="4.929"
        fill="#2BCB4E"
        stroke="#010B12"
        strokeWidth="1.733"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3,
          duration: 1,
          ease: 'easeInOut',
        }}
        transform="scale(-1.22477 .70706) rotate(-45 474.078 523.762)"
      ></motion.circle>
      {/* Shadow */}
      <motion.path
        fill="url(#paint4_radial_45_35)"
        d="M354.001 249.187c-22.464.581-45.258-4.08-62.411-13.983-32.406-18.708-32.406-49.04 0-67.748 17.153-9.903 39.947-14.564 62.411-13.983v95.714z"
        // opacity="0.8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: 'easeInOut',
        }}
      ></motion.path>
      {/* Layer 1 */}
      <motion.g
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.75,
          ease: 'easeInOut',
        }}
      >
        <path
          fill="url(#paint5_linear_45_35)"
          d="M354 230.675c-14.258.6-28.87-2.246-39.771-8.54-10.036-5.793-15.011-13.401-14.927-20.994v-15.369h7.693c2.016-1.864 4.427-3.627 7.234-5.247 10.901-6.294 25.513-9.14 39.771-8.54v58.69z"
        ></path>
        <path
          fill="#010B12"
          fillOpacity="0.244"
          d="M354 230.675c-14.258.6-28.87-2.246-39.771-8.54-10.036-5.793-15.011-13.401-14.927-20.994v-15.369h7.693c2.016-1.864 4.427-3.627 7.234-5.247 10.901-6.294 25.513-9.14 39.771-8.54v58.69z"
        ></path>
        <path
          fill="url(#paint6_linear_45_35)"
          d="M354 214.365c-14.258.601-28.869-2.245-39.771-8.539-19.904-11.491-19.904-30.12 0-41.611 10.902-6.293 25.513-9.14 39.771-8.539v58.689z"
        ></path>
        <path
          fill="#23262C"
          d="M354 214.365c-14.258.601-28.869-2.245-39.771-8.539-19.904-11.491-19.904-30.12 0-41.611 10.902-6.293 25.513-9.14 39.771-8.539v58.689z"
        ></path>
        <path
          fill="url(#paint7_radial_45_35)"
          fillOpacity="0.77"
          d="M354 214.365c-14.258.601-28.869-2.245-39.771-8.539-19.904-11.491-19.904-30.12 0-41.611 10.902-6.293 25.513-9.14 39.771-8.539v58.689z"
        ></path>
        <path
          fill="url(#paint8_linear_45_35)"
          d="M354 214.365c-14.258.601-28.871-2.245-39.773-8.539-19.904-11.491-19.904-30.12 0-41.611 10.902-6.294 25.515-9.14 39.773-8.539v1.001a87.619 87.619 0 00-3.734-.08c-12.915 0-25.775 2.847-35.539 8.484-9.77 5.64-14.428 12.893-14.428 19.94 0 7.046 4.658 14.299 14.428 19.939 9.764 5.637 22.624 8.484 35.539 8.484 1.246 0 2.492-.027 3.734-.08v1.001z"
        ></path>
      </motion.g>
      {/* Layer 2 */}
      <motion.g
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
          ease: 'easeInOut',
        }}
      >
        <path
          fill="url(#paint9_linear_45_35)"
          d="M354 205.616c-14.258.601-28.87-2.245-39.771-8.539-10.036-5.793-15.011-13.402-14.927-20.994v-15.369h7.693c2.016-1.865 4.427-3.627 7.234-5.248 10.901-6.293 25.513-9.14 39.771-8.539v58.689z"
        ></path>
        <path
          fill="#010B12"
          fillOpacity="0.048"
          d="M354 205.616c-14.258.601-28.87-2.245-39.771-8.539-10.036-5.793-15.011-13.402-14.927-20.994v-15.369h7.693c2.016-1.865 4.427-3.627 7.234-5.248 10.901-6.293 25.513-9.14 39.771-8.539v58.689z"
        ></path>
        <path
          fill="url(#paint10_linear_45_35)"
          d="M354 205.616c-14.258.601-28.87-2.245-39.771-8.539-10.036-5.793-15.011-13.402-14.927-20.994v-15.369h7.693c2.016-1.865 4.427-3.627 7.234-5.248 10.901-6.293 25.513-9.14 39.771-8.539v58.689z"
        ></path>
        <path
          fill="url(#paint11_linear_45_35)"
          d="M354 189.307c-14.258.601-28.869-2.246-39.771-8.54-19.904-11.49-19.904-30.12 0-41.61 10.902-6.294 25.513-9.14 39.771-8.54v58.69z"
        ></path>
        <path
          fill="#23262C"
          d="M354 189.307c-14.258.601-28.869-2.246-39.771-8.54-19.904-11.49-19.904-30.12 0-41.61 10.902-6.294 25.513-9.14 39.771-8.54v58.69z"
        ></path>
        <path
          fill="url(#paint12_radial_45_35)"
          fillOpacity="0.77"
          d="M354 189.307c-14.258.601-28.869-2.246-39.771-8.54-19.904-11.49-19.904-30.12 0-41.61 10.902-6.294 25.513-9.14 39.771-8.54v58.69z"
        ></path>
        <path
          fill="url(#paint13_linear_45_35)"
          d="M354.002 189.307c-14.258.601-28.871-2.246-39.773-8.54-19.904-11.49-19.904-30.12 0-41.61 10.902-6.294 25.515-9.141 39.773-8.54v1.001a87.62 87.62 0 00-3.734-.079c-12.915 0-25.775 2.847-35.539 8.484-9.77 5.64-14.428 12.892-14.428 19.939 0 7.047 4.658 14.299 14.428 19.939 9.764 5.637 22.624 8.484 35.539 8.484a87.62 87.62 0 003.734-.079v1.001z"
        ></path>
      </motion.g>
      {/* Layer 3 */}
      <motion.g
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
          ease: 'easeInOut',
        }}
      >
        <path
          fill="url(#paint14_linear_45_35)"
          d="M354.002 180.558c-14.258.6-28.87-2.246-39.771-8.54-10.036-5.793-15.011-13.401-14.927-20.994v-15.369h7.693c2.016-1.864 4.427-3.627 7.234-5.247 10.901-6.294 25.513-9.14 39.771-8.54v58.69z"
        ></path>
        <path
          fill="url(#paint15_linear_45_35)"
          d="M354.002 180.558c-14.258.6-28.87-2.246-39.771-8.54-10.036-5.793-15.011-13.401-14.927-20.994v-15.369h7.693c2.016-1.864 4.427-3.627 7.234-5.247 10.901-6.294 25.513-9.14 39.771-8.54v58.69z"
        ></path>
        <path
          fill="url(#paint16_linear_45_35)"
          d="M354.002 164.248c-14.258.601-28.87-2.245-39.771-8.539-19.904-11.491-19.904-30.12 0-41.611 10.901-6.293 25.513-9.14 39.771-8.539v58.689z"
        ></path>
        <path
          fill="url(#paint17_linear_45_35)"
          d="M354.002 164.248c-14.258.601-28.871-2.245-39.773-8.539-19.904-11.491-19.904-30.12 0-41.611 10.902-6.294 25.515-9.14 39.773-8.539v1.001a87.619 87.619 0 00-3.734-.08c-12.915 0-25.775 2.847-35.539 8.484-9.77 5.64-14.428 12.893-14.428 19.94 0 7.046 4.658 14.299 14.428 19.939 9.764 5.637 22.624 8.484 35.539 8.484 1.246 0 2.492-.027 3.734-.08v1.001z"
        ></path>
      </motion.g>
      {/* Defs */}
      <defs>
        <radialGradient
          id="paint0_radial_45_35"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-321.0001 -4.99784 2.58827 -166.23885 344 207)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#547185"></stop>
          <stop offset="1" stopColor="#547185" stopOpacity="0"></stop>
        </radialGradient>
        <linearGradient
          id="paint1_linear_45_35"
          x1="261.004"
          x2="118.008"
          y1="193.983"
          y2="169.862"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2BCB4E"></stop>
          <stop offset="1" stopColor="#2BCB4E" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_45_35"
          x1="275.015"
          x2="173.762"
          y1="277.181"
          y2="382.911"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52B8F5"></stop>
          <stop offset="1" stopColor="#52B8F5" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_45_35"
          x1="350.41"
          x2="252.913"
          y1="256.237"
          y2="202.216"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2BCB4E"></stop>
          <stop offset="1" stopColor="#52B8F5"></stop>
        </linearGradient>
        <radialGradient
          id="paint4_radial_45_35"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-58.67717 33.87455 -29.33493 -50.81368 350.267 201.33)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.521"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </radialGradient>
        <linearGradient
          id="paint5_linear_45_35"
          x1="361"
          x2="312"
          y1="210.5"
          y2="184.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#283238"></stop>
          <stop offset="1" stopColor="#C9D3DB"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_45_35"
          x1="386.309"
          x2="350.274"
          y1="164.215"
          y2="226.634"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#547185"></stop>
          <stop offset="1" stopColor="#EDF2F5"></stop>
        </linearGradient>
        <radialGradient
          id="paint7_radial_45_35"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(148.876 153.437 139.71) scale(49.9639 43.2681)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.791" stopColor="#050608"></stop>
          <stop offset="1" stopColor="#050608" stopOpacity="0"></stop>
        </radialGradient>
        <linearGradient
          id="paint8_linear_45_35"
          x1="307.801"
          x2="343.329"
          y1="207.764"
          y2="194.043"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_45_35"
          x1="401.236"
          x2="299.302"
          y1="143.79"
          y2="143.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#547185"></stop>
          <stop offset="1" stopColor="#C9D3DB"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear_45_35"
          x1="366"
          x2="319"
          y1="188.5"
          y2="161"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#283238"></stop>
          <stop offset="1" stopColor="#C9D3DB"></stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear_45_35"
          x1="386.307"
          x2="350.272"
          y1="139.157"
          y2="201.576"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#547185"></stop>
          <stop offset="1" stopColor="#EDF2F5"></stop>
        </linearGradient>
        <radialGradient
          id="paint12_radial_45_35"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(148.876 156.925 127.182) scale(49.9639 43.2681)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.791" stopColor="#050608"></stop>
          <stop offset="1" stopColor="#050608" stopOpacity="0"></stop>
        </radialGradient>
        <linearGradient
          id="paint13_linear_45_35"
          x1="307.801"
          x2="343.329"
          y1="182.706"
          y2="168.985"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear_45_35"
          x1="401.238"
          x2="299.304"
          y1="118.732"
          y2="118.732"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#547185"></stop>
          <stop offset="1" stopColor="#C9D3DB"></stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear_45_35"
          x1="371"
          x2="325.5"
          y1="174"
          y2="149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#283238"></stop>
          <stop offset="1" stopColor="#C9D3DB"></stop>
        </linearGradient>
        <linearGradient
          id="paint16_linear_45_35"
          x1="386.309"
          x2="350.274"
          y1="114.098"
          y2="176.517"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9D3DB"></stop>
          <stop offset="1" stopColor="#EDF2F5"></stop>
        </linearGradient>
        <linearGradient
          id="paint17_linear_45_35"
          x1="307.801"
          x2="343.329"
          y1="157.647"
          y2="143.926"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
