import starIcon from "../icon/star.svg";

export function truncate(str, length) {
   if (str.length <= length) {
      return str;
   } else {
      return str.slice(0, length) + "...";
   }
}

export function displayStars(rating) {
   let stars = [];
   for (let i = 0; i < rating; i++) {
      stars = stars.concat(
         <img
            src={starIcon}
            className="mr-1 d-inline-block"
            width="18px"
            alt="star icon"
            key={i}
         />
      );
   }
   return stars;
}

export function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      return str;
   }
   return JSON.parse(str);
}
