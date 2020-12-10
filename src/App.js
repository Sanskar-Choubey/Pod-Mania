import React, { useState } from "react";
import "./styles.css";

const podcastDB = {
  News: [
    {
      name: "1. BBC News",
      description: "The latest news from the BBC",
      link:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9wb2RjYXN0LnZvaWNlLmFwaS5iYmNpLmNvLnVrL3Jzcy9hdWRpby9wMDVoaDRxeT9hcGlfa2V5PVdiZWs1elNxeHowSGsxYmxvNUlCcWJkOVNDV0lmTmJU?sa=X&ved=0CEMQjs4CKARqFwoTCJDMpt2Cw-0CFQAAAAAdAAAAABAC",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR73TkH_9zjtJQxbKP67sUwSki6z8IvDV6ndyNJZWY9MJuwzGY"
    },
    {
      name: "2. The Economist Radio",
      description: "The best and latest news from the Economist",
      link:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9wb2RjYXN0LnZvaWNlLmFwaS5iYmNpLmNvLnVrL3Jzcy9hdWRpby9wMDVoaDRxeT9hcGlfa2V5PVdiZWs1elNxeHowSGsxYmxvNUlCcWJkOVNDV0lmTmJU?sa=X&ved=2ahUKEwjNuInRgsPtAhV3x3MBHefWDd0Qjs4CKAR6BAgBEEM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMxfl4unyTvu5J4PXheOzfV2kfUBeAGRttx1QmLnSdyQB4RsD"
    },
    {
      name: "3. The Fox News Rundown",
      description:
        "The best news-based daily morning podcast from The Fox News",
      link:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5mZWVkYnVybmVyLmNvbS9Gb3hOZXdzUnVuZG93bg?sa=X&ved=0CEsQjs4CKARqFwoTCJDMpt2Cw-0CFQAAAAAdAAAAABAC",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQO0DNavQDwEaNea6BHki6qUCAtqiWS3IBDECooh_spkDImFjYw"
    }
  ],

  Technology: [
    {
      name: "1. TED Radio Hour",
      description:
        "Explore the biggest question of our time with the help of world's greatest thinkers",
      link:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5ucHIub3JnLzUxMDI5OC9wb2RjYXN0LnhtbA?sa=X&ved=0CIIBEI7OAigIahcKEwiQzKbdgsPtAhUAAAAAHQAAAAAQAg",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQTPj2qVxqA9KZP94CE-0RglzYmHc-9edPOGqbpjlltlHqMaok"
    },
    {
      name: "2. Darknet Diaries",
      description: "Explore the true stories of the dark side of the internet.",
      link:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vZGFya25ldGRpYXJpZXM?sa=X&ved=0CIQBEI7OAigIahcKEwiQzKbdgsPtAhUAAAAAHQAAAAAQAg",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNDm4YJ_kCbkGjt-vnbpe0V7P0rhEtHl478aGdUATAPidMy1hj"
    },
    {
      name: "3. Lex Fridman Podcast",
      description:
        "Conversations about AI,science,tech,history,intelligence,love,power and what not",
      link:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9sZXhmcmlkbWFuLmNvbS9mZWVkL3BvZGNhc3Qv?sa=X&ved=0CIMBEI7OAigIahcKEwiQzKbdgsPtAhUAAAAAHQAAAAAQAg",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVTPAyrcDAearNg0xnrtlIGv3np014iTawe3tul0qFaijuYQA"
    }
  ],

  Healthe: [
    {
      name: "1. Think and Grow Rich",
      description: "Years of interviews with over 500 of the top world leaders",
      link:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9saXZlc2Vuc2ljYWwuY29tL3Nlcmllcy90aGluay1ncm93LXJpY2gvZmVlZC8?sa=X&ved=0CJ8BEI7OAigKahcKEwiQzKbdgsPtAhUAAAAAHQAAAAAQAg",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFvn56KYhFAIDdUI7KDaZjsgpbx6PLHcXnwaFPljPMWm3AhJQ"
    },
    {
      name: "2. Mind Pump:Raw Fitness Truth",
      description:
        "Online radio show/podcast dedicated to shedding the light on various fitness,healthe and wellness topics.",
      link:
        "https://podcasts.google.com/feed/aHR0cDovL21pbmRwdW1wLmxpYnN5bi5jb20vcnNz",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArctAkhD4e1-5Mu2DYv06xSgoqaVFcMX8Cvh96Amp1t1F_YQ"
    },
    {
      name: "3. The Mindful Minute",
      description:
        "Dedicated to improve your mental healthe  through meditation and stuffs.",
      link:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5ibHVicnJ5LmNvbS9mZWVkcy90aGVfbWluZGZ1bF9taW51dGUueG1s",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJiSjISgfHheaM1-dKthvHMIfh8RUC6pHl89_yEE5k6vrYJ9E"
    }
  ],

  Education: [
    {
      name: "1. The Knowledge Project",
      description:
        "Eets you master the best of what other people have already figured out.",
      link: "https://podcasts.google.com/search/The%20knowledge%20project",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_C-OrXpcDJyIDq5KkeSgxZrj1BMZ8ZiYO_9oNxCfq1PsvYX4v"
    },
    {
      name: "2. Code NewBie",
      description: "Stories from people on their coding journey",
      link: "https://podcasts.google.com/search/Code%20NewBie",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHtA_daYtfEpJBrDDajTZZm0ob59kMyYgzxmzuDlCKMcqB6fU"
    },
    {
      name: "3. The GaryVee Audio Experience",
      description:
        "On this podcast you'll find a mix of my #AskGaryVee show episodes, keynote speeches on marketing and business,",
      link:
        "https://podcasts.google.com/search/The%20Garyvee%20audio%20experience",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDLVyn6wm9BpVT-x3vDIcwa7nVfH0Mf_FqAufL3EtdbluxNRE"
    }
  ],
  Others: [
    {
      name: "1. Developer Duvidha",
      description:
        "Developer Duvidha is a Hindi Podcast which revolves around common problems faced by the developer community",
      link: "https://podcasts.google.com/search/Developer%20Duvidha",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYD5GRMsZQuzT07aUXsaJWa3kFV-Y1rh5SnDPjN3mi6wGlsZqy"
    },
    {
      name: "2. The Ranveer Show",
      description:
        " Every episode has been designed to bring you some kind of value add. Life is a never ending self improvement game - whether it's health, career guidance, lifestyle advice or just plain old inspiration.",
      link: "https://podcasts.google.com/search/The%20Ranveer%20show",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAl8CKAt_7TywgFt7bSFuNt0gaWRIzLD0kUFt-yS0dt7QJgD3q"
    }
  ]
};

var podcastWeknow = Object.keys(podcastDB);

export default function App() {
  const [category, setCategory] = useState("Technology");

  function categoryClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1 className="heading">Pod-Mania 🎧</h1>
      <hr />
      {/* This section is for the description on the app */}
      <p className="quotes">
        " The best investment you can make,is an investment in yourself.
        <br /> The more you <strong>learn</strong>,the more you'll
        <strong> earn "</strong>.
      </p>

      <p className="para">
        Listening to podcast is the best way to do that.
        <br />
        So here I am with some podcast recommendations to help you utilize the
        best you can.
      </p>

      {/* This section is for listing out the category as the button in the app  */}
      <div>
        {podcastWeknow.map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid green",
              margin: "1rem 0.3rem",
              backgroundColor: "black",
              color: "yellowgreen"
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <hr />

      {/*This section is for displaying the list of padcast  */}
      <div>
        {
          <ul>
            {podcastDB[category].map((category) => (
              <li
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid green",
                  maxWidth: "90%",
                  margin: "1rem 0rem",
                  borderRadius: "1rem",
                  display: "block"
                }}
              >
                <div style={{ fontWeight: "bold" }}>{category.name}</div>
                <img
                  src={category.image}
                  alt="podcastImage"
                  style={{
                    borderRadius: "50%",
                    height: "5rem",
                    width: "5rem",
                    border: "1px solid green"
                  }}
                ></img>
                <div style={{ fontWeight: "normal" }}>
                  {category.description}
                </div>

                <a
                  href={category.link}
                  style={{
                    padding: "0.3rem",
                    margin: "6rem"
                  }}
                >
                  View More
                </a>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
