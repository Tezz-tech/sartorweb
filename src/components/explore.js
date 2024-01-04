import "../styles/home.css";
import CategoryCard from "./categoryCard";

export default function Explore({ title, handleClick, btnTitle }) {
  return (
    <div className=" explore-container">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <h2 className="explore-titles">{title}</h2>
        {
          handleClick && (
          <button className="explore-button" onClick={handleClick}>
            {btnTitle}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M14.5625 5.35999V12.6725C14.5625 12.8217 14.5032 12.9647 14.3977 13.0702C14.2922 13.1757 14.1492 13.235 14 13.235C13.8508 13.235 13.7077 13.1757 13.6022 13.0702C13.4967 12.9647 13.4375 12.8217 13.4375 12.6725V6.71772L5.39795 14.758C5.2924 14.8635 5.14924 14.9228 4.99998 14.9228C4.85071 14.9228 4.70756 14.8635 4.60201 14.758C4.49646 14.6524 4.43716 14.5093 4.43716 14.36C4.43716 14.2107 4.49646 14.0676 4.60201 13.962L12.6422 5.92249H6.68748C6.53829 5.92249 6.39522 5.86322 6.28973 5.75773C6.18424 5.65224 6.12498 5.50917 6.12498 5.35999C6.12498 5.2108 6.18424 5.06773 6.28973 4.96224C6.39522 4.85675 6.53829 4.79749 6.68748 4.79749H14C14.1492 4.79749 14.2922 4.85675 14.3977 4.96224C14.5032 5.06773 14.5625 5.2108 14.5625 5.35999Z"
                fill="#282828"
              />
            </svg>
          </button>

          )
        }
      </div>
    </div>
  );
}
