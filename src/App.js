import React, {  useEffect, useState } from "react";
import './index.css';
import { ThemeProvider, LanguageProvider } from "./theme"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.less';
import Home from './components/Home';
import ReadMoreNews from './components/news/readMore';
import fire from './fire';
export default function App() {
  const [news, setNews] = useState([]);
  const [get, setGetNews] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fire.firestore().collection("news").get().then((i) => {
        const items = i.docs.map((d) => d.data());
        setNews(items);
      })
    }
    fetchData();
  }, [get]);
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-gray-100 dark:bg-gray-800 h-screen scrollbar font-dosis" >
          <Router>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/home" />} />
              <Route path="/home" exact  >
                <Home news={news}
                  get={get}
                  setGetNews={setGetNews} />
              </Route>
              <Route path="/news/:date" exact >
                <ReadMoreNews
                  news={news}
                  get={get}
                  setGetNews={setGetNews} />
              </Route>
            </Switch>
          </Router>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
