import { useState } from "react";
import { useNavigate } from "react-router";

import style from "./homepage.module.css";

export const CarForm = () => {
  const [carNumber, setCarNumber] = useState("");
  // const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const isValidCarNumber = (data) => {
    data = data.toUpperCase();
    const pattern = new RegExp(
      "^[A-Z|a-z]{2}([1-9]{1}|[0-9]{2})[A-Z|a-z]{1,2}[0-9]{1,4}$"
    );
    //console.log(data);
    if (pattern.test(data)) {
      return true;
    } else {
      return false;
    }
  };

  const handleKeyUp = () => {
    const status = isValidCarNumber(carNumber);
    // console.log(status, carNumber);
    // setStatus(true);
    if (status) {
      localStorage.setItem("carnumber", JSON.stringify(carNumber));
      window.location.href =
        " https://ackoclone-yashraj-m.vercel.app/car/car-use";
    } else {
      alert("Enter a valid Car Number");
    }
  };

  return (
    <div className={style.mid_div}>
      <img
        className={style.left_banner}
        src="https://acko-home-prod.ackoassets.com/next_assets/eb5a39996779eebb83cae41d02d9f74d91aedcf7/_next/static/images/homepage-banner-illustration-1-5d2a4d352884a025c5e728efb0a4c6ce.svg"
        alt="left-banner"
      />

      

      <div className={style.categories} >
 
        <div>
          <img
            className={style.cat_img} onClick={()=> navigate('/carpage')}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii0xNi45MzUiLz48cGF0aCBkPSJNMzIuMDg2IDE3LjE0N2MtMi4wNDMtLjcwNC0yLjc1My0uODQ5LTUuMzUzLTEuMjg1LS41MDMtLjA4OS0uOTgzLS4yNzktMS4zMTEtLjY3bC00LjA5Ny00LjAyMmMtLjUyNC0uNTE0LTEuMjAyLS44MzgtMS45MzQtLjkxNmEzOS43OCAzOS43OCAwIDAgMC04LjU1NS0uMDQ1Yy0uOTcyLjEwMS0xLjg1Ny42MTQtMi40MjUgMS40MTlsLTIuMjQgMy4xODRhLjc2Ljc2IDAgMCAxLS40NDguMzEzbC0xLjM1NS4zNDZjLS44NDEuMjIzLTEuNDA5IDEuMDE3LTEuMzY2IDEuODg4bC4yMjkgNC4zNDZjLjA1NS45ODMuODQxIDEuNzQzIDEuODAzIDEuNzQzaC42ODh2LS4wMjJjMC0yLjUxNCAxLjk4OC00LjU0OCA0LjQ0Ny00LjU0OHM0LjQ0NyAyLjAzNCA0LjQ0NyA0LjU0OHYuMDIyaDguMDQxdi0uMDIyYzAtMi41MTQgMS45ODgtNC41NDggNC40NDctNC41NDhzNC40NDcgMi4wMzQgNC40NDcgNC41NDh2LjAyMmguNTc5Yy41NzkgMCAxLjA4Mi0uNDM2IDEuMTY5LTEuMDE3bC4zMTctMi44NDljLjEwOS0xLjA3My0uNTI0LTIuMTAxLTEuNTI5LTIuNDM2ek0xMi45NDUgMTUuMjdsLTMuNzgtLjA1NmMtLjMzOSAwLS41NzktLjM1Ny0uNDQ4LS42ODJsLjc2NS0xLjk3OGMuMTk3LS41MDMuNjQ1LS44NDkgMS4xNjktLjg5NGwyLjI5NC0uMTM0djMuNzQzem04Ljk4MS4xMjNsLTcuMzQyLS4xMDF2LTMuODFsNC4zNTkuMTc5YTEuMzEgMS4zMSAwIDAgMSAuODQxLjQyNWwyLjQwNCAyLjcwNGMuMjA4LjIzNS4wNDQuNjAzLS4yNjIuNjAzeiIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0yNy4xMDUgMjAuMTYzYy0xLjc3IDAtMy4yMDEgMS40NjQtMy4yMDEgMy4yNzRzMS40MzEgMy4yNzQgMy4yMDEgMy4yNzQgMy4yMDEtMS40NjQgMy4yMDEtMy4yNzQtMS40MzEtMy4yNzQtMy4yMDEtMy4yNzR6Ii8+PC9kZWZzPjwvc3ZnPg=="
            alt=""
          />
          <p className={style.car_cat_text}><b>Car</b></p>
          {/* <hr /> */}
        </div>

        <div>
          <img
            className={style.cat_img}   onClick={()=> navigate('/bikepage')}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg=="
            alt=""
          />
          <p className={style.bike_cat_text}><b>Bike</b></p>
          {/* <hr /> */}
        </div>
       
        <div >
          <img
            className={style.cat_img}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0ibm9uZSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTguNTU0IDIxLjcyMmMtLjI1NS4yNTUtLjUxLjI1NS0uNzY1LjI1NXMtLjUxLS4xMjgtLjc2NS0uMjU1bC0zLjgyNi0zLjY5OGMtLjM4My0uMzgzLS4zODMtMS4xNDggMC0xLjUzczEuMTQ4LS4zODMgMS41MyAwbDMuMDYxIDIuOTMzIDEwLjA3NC05LjQzN2MtLjg5My0uODkzLTIuMTY4LTEuNjU4LTMuODI2LTEuOTEzLTMuODI2LS42MzgtNi4yNDkgMi45MzMtNi4yNDkgMi45MzNzLTIuMjk1LTMuNDQzLTYuMTIxLTIuODA2Yy01LjEwMS43NjUtNi43NTkgNS44NjYtNC45NzMgMTAuNTg1IDEuNzg1IDQuODQ2IDguMTYyIDguNTQ0IDEwLjMzIDkuNjkyLjUxLjI1NSAxLjAyLjI1NSAxLjUzIDAgMi4xNjgtMS4xNDggOC41NDQtNC43MTggMTAuNDU3LTkuODE5Ljg5My0yLjQyMy44OTMtNC44NDYgMC02Ljg4NmwtMTAuNDU3IDkuOTQ3eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
            alt=""
          />
          <p className={style.health_cat_text}><b>Health</b></p>
          {/* <hr /> */}
     
      </div>
      </div>

      
<p className={style.insurance_text}>Bike insurance starting at ₹555</p>
      {/* <hr className="categories_hr" /> */}

      <div className={style.car_number}>
        {/* <img
          className={style.form_car_img}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg=="
          alt=""
          style={{color:"gray"}}
        /> */}

        <form className={style.cfform}>
          <input
            className={style.categories_input}
            onChange={(e) => {
              setCarNumber(e.target.value);
            }}
            type="text"
            style={{}}
            placeholder="Enter your bike number"
           
          />
        </form>
        
        <button onClick={handleKeyUp} className={style.insure_now_button}>
       <span> Get quote</span>
        </button>

      </div>

      
     

      <div className={style.div_quote}>
      <div className={style.bikediv}>
      <img
            className={style.cat_img}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg=="
            alt=""
          />
       </div>

       
        <p className={style.quote_text_bold}>Looking to insure brand new bike?</p>
        <p className={style.quote_text}>
         View Plans
        </p>
       
      
      </div>
      <div className={style.ratingdiv}>
      <div>
        <img
          src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHdpZHRoPSIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTYuNDk5OCAxNy4yNzg4YzEuNDgwMSAwIDIuNjgtMS4xOTY1IDIuNjgtMi42NzI1cy0xLjE5OTktMi42NzI1LTIuNjgtMi42NzI1LTIuNjggMS4xOTY1LTIuNjggMi42NzI1IDEuMTk5OSAyLjY3MjUgMi42OCAyLjY3MjV6IiBmaWxsPSIjNTkyMGM1Ii8+PHBhdGggZD0ibTE2LjQ5OTggMTguMTAzN2MtMS45MSAwLTMuNDctMS41NjU5LTMuNDctMy40OTcxIDAtMS45MzEzIDEuNTYtMy40OTcyIDMuNDctMy40OTcyczMuNDcgMS41NjU5IDMuNDcgMy40OTcyYzAgMS45MzEyLTEuNTYgMy40OTcxLTMuNDcgMy40OTcxem0wLTUuMzQ0OWMtMS4wNCAwLTEuODguODI0Ny0xLjg4IDEuODQ3OCAwIDEuMDIzLjg1IDEuODQ3NyAxLjg4IDEuODQ3N3MxLjg4LS44MjQ3IDEuODgtMS44NDc3YzAtMS4wMjMxLS44NS0xLjg0NzgtMS44OC0xLjg0Nzh6IiBmaWxsPSIjZmZjNDAwIi8+PHBhdGggZD0ibTE2LjQ5OTkgOS4zNDQ5NGMtMS40NiAwLTIuNjQtMS4yMDA1Mi0yLjY0LTIuNjcyNDdzMS4xOC0yLjY3MjQ3IDIuNjQtMi42NzI0NyAyLjY0IDEuMjAwNTIgMi42NCAyLjY3MjQ3LTEuMTggMi42NzI0Ny0yLjY0IDIuNjcyNDd6bTAtMy42OTU1MmMtLjU4IDAtMS4wNi40NTkzMy0xLjA2IDEuMDIzMDUgMCAuNTYzNzMuNDcgMS4wMjMwNiAxLjA2IDEuMDIzMDZzMS4wNi0uNDU5MzMgMS4wNi0xLjAyMzA2YzAtLjU2MzcyLS40Ny0xLjAyMzA1LTEuMDYtMS4wMjMwNXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMTIuMDQgMjcuMTc0M3YtMy41NzAzYzAtMS44ODk1IDEuNTMtMy40MjQxIDMuNDMtMy40MjQxaDIuMDZjMS44OSAwIDMuNDMgMS41MzQ2IDMuNDMgMy40MjQxdjMuNTcwMyIgZmlsbD0iIzU5MjBjNSIvPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im0yMC45NiAyNy45OTkyYy0uNDQgMC0uNzktLjM2NTMtLjc5LS44MjQ3di0zLjU3MDJjMC0xLjQzMDItMS4xOC0yLjU5OTQtMi42My0yLjU5OTRoLTIuMDZjLTEuNDUgMC0yLjYzIDEuMTY5Mi0yLjYzIDIuNTk5NHYzLjU3MDJjMCAuNDU5NC0uMzUuODI0Ny0uNzkuODI0N3MtLjc5LS4zNjUzLS43OS0uODI0N3YtMy41NzAyYzAtMi4zMzg0IDEuODktNC4yNDg4IDQuMjItNC4yNDg4aDIuMDZjMi4zMyAwIDQuMjIgMS45MTA0IDQuMjIgNC4yNDg4djMuNTcwMmMwIC40NTk0LS4zNS44MjQ3LS43OS44MjQ3eiIvPjxwYXRoIGQ9Im0yMy44Mzk4IDE2LjI4NzZjLTEuOCAwLTMuMjctMS40ODI0LTMuMjctMy4yOTg4IDAtMS44MTY1IDEuNDctMy4yOTg4NiAzLjI3LTMuMjk4ODZzMy4yNyAxLjQ4MjM2IDMuMjcgMy4yOTg4NmMwIDEuODE2NC0xLjQ3IDMuMjk4OC0zLjI3IDMuMjk4OHptMC00Ljk0ODJjLS45MyAwLTEuNjguNzQxMS0xLjY4IDEuNjQ5NCAwIC45MDgyLjc1IDEuNjQ5NCAxLjY4IDEuNjQ5NHMxLjY4LS43NDEyIDEuNjgtMS42NDk0YzAtLjkwODMtLjc1LTEuNjQ5NC0xLjY4LTEuNjQ5NHoiLz48cGF0aCBkPSJtMjcuNzA5OCAyMy41ODQzYy0uNDQgMC0uNzktLjM2NTQtLjc5LS44MjQ3di0xLjY4MDhjMC0xLjI5NDQtMS4wNy0yLjMzODQtMi4zOC0yLjMzODRoLTEuNjdjLS4zMyAwLS42NC4wNjI3LS45NC4xODc5LS40MS4xNjcxLS44Ny0uMDMxMy0xLjAzLS40NTkzcy4wMy0uOTA4Mi40NC0xLjA3NTNjLjQ5LS4yMDg3IDEtLjMxMzEgMS41My0uMzEzMWgxLjY3YzIuMTggMCAzLjk2IDEuNzg1MSAzLjk2IDMuOTg3OHYxLjY4MDdjMCAuNDU5NC0uMzUuODI0Ny0uNzkuODI0N3oiLz48cGF0aCBkPSJtOS4xNjAxNCAxNi4yODc2Yy0xLjggMC0zLjI3LTEuNDgyNC0zLjI3LTMuMjk4OCAwLTEuODE2NSAxLjQ3LTMuMjk4ODYgMy4yNy0zLjI5ODg2IDEuNzk5OTYgMCAzLjI2OTk2IDEuNDgyMzYgMy4yNjk5NiAzLjI5ODg2IDAgMS44MTY0LTEuNDcgMy4yOTg4LTMuMjY5OTYgMy4yOTg4em0wLTQuOTQ4MmMtLjkzIDAtMS42OC43NDExLTEuNjggMS42NDk0IDAgLjkwODIuNzUgMS42NDk0IDEuNjggMS42NDk0LjkyOTk2IDAgMS42Nzk5Ni0uNzQxMiAxLjY3OTk2LTEuNjQ5NCAwLS45MDgzLS43NS0xLjY0OTQtMS42Nzk5Ni0xLjY0OTR6Ii8+PHBhdGggZD0ibTUuMjkgMjMuNTg0NmMtLjQ0IDAtLjc5LS4zNjU0LS43OS0uODI0N3YtMS42ODA4YzAtMi4yMDI3IDEuNzgtMy45ODc4IDMuOTYtMy45ODc4aDEuNjdjLjUzIDAgMS4wNC4xMDQ0IDEuNTMuMzEzMi40MS4xNjcuNi42NTc3LjQ0IDEuMDc1Mi0uMTYuNDI4MS0uNjMuNjI2NC0xLjAzLjQ1OTQtLjMtLjEyNTMtLjYxLS4xODc5LS45NC0uMTg3OWgtMS42N2MtMS4zMSAwLTIuMzggMS4wNDM5LTIuMzggMi4zMzg0djEuNjgwN2MwIC40NTkzLS4zNS44MjQ3LS43OS44MjQ3eiIvPjwvZz48L3N2Zz4="
        />
        <p className={style.info}>7.5 Cr+</p>

        <p  className={style.info}>Happy smiles</p>
        </div>

        <div>
        <img
          src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI2IiB2aWV3Qm94PSIwIDAgMjQgMjYiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtNS4yOTg3MSAyMy4xMjY4LjE3NTY3LjM2MTZzLjA2Mi4wNzI0LjExMzY3LjA4MjdsLjM5MjY3LjA2MmMuMTI0LjAyMDcuMTc1NjcuMTc1Ny4wODI2Ny4yNTgzbC0uMjc5LjI3OXMtLjA1MTY3LjA4MjctLjA0MTM0LjEzNDRsLjA2Mi4zOTI2Yy4wMjA2Ny4xMjQtLjEwMzMzLjIxNy0uMjE3LjE2NTRsLS4zNTEzNC0uMTg2cy0uMDkzLS4wMjA3LS4xNDQ2NyAwbC0uMzUxMzQuMTg2Yy0uMTEzNjcuMDYyLS4yMzc2Ny0uMDQxNC0uMjE3LS4xNjU0bC4wNjItLjM5MjZzMC0uMTAzNC0uMDQxMzMtLjEzNDRsLS4yNzkwMS0uMjc5Yy0uMDkzLS4wOTMtLjA0MTMzLS4yMzc2LjA4MjY3LS4yNTgzbC4zOTI2Ny0uMDYycy4wOTMtLjA0MTMuMTEzNjctLjA4MjdsLjE3NTY3LS4zNjE2Yy4wNTE2Ny0uMTEzNy4yMTctLjExMzcuMjY4NjcgMHoiLz48cGF0aCBkPSJtMTYuMDY1MS4yMjgzMzkuMTQ0Ny42NzE2NzdjLjAyMDcuMDgyNjY4LjA3MjMuMTU1MDA0LjE1NS4xODYwMDRsLjYzMDQuMjU4MzRjLjE5NjMuMDgyNjYuMjE3LjM2MTY3LjAzMS40NjVsLS41Nzg3LjM1MTM0Yy0uMDcyNC4wNDEzNC0uMTI0LjEyNC0uMTI0LjIwNjY3bC0uMDUxNy42ODIwMWMtLjAxMDMuMjE3MDEtLjI2ODcuMzIwMzQtLjQyMzcuMTc1NjdsLS41MDYzLS40NTQ2N2MtLjA2Mi0uMDYyLS4xNTUtLjA4MjY3LS4yMzc3LS4wNjJsLS42NTEuMTY1MzNjLS4yMDY3LjA1MTY3LS4zODIzLS4xNTUtLjI5OTctLjM2MTY3bC4yNjg3LS42MzAzNGMuMDMxLS4wODI2Ny4wMzEtLjE2NTM0LS4wMjA3LS4yNDgwMWwtLjM2MTYtLjU3ODY3Yy0uMTEzNy0uMTg2MDA1LjAzMS0uNDIzNjc1LjI0OC0uNDAzMDA4bC42NzE3LjA2MjAwMWMuMDgyNiAwIC4xNjUzLS4wMzEuMjE3LS4wOTMwMDFsLjQzNC0uNTI3MDA4NGMuMTM0My0uMTY1MzM1OC40MDMtLjEwMzMzNDg4LjQ0NDMuMTEzNjY4NHoiLz48cGF0aCBkPSJtMTEuOTk0NSAyNS43NjQ3Yy0uMjYxNyAwLS41MDE1LS4xMi0uNjU0Mi0uMzI3MmwtMy4zMDM5NS00LjQ3MDdoLTMuNjQxOThjLTIuNDIwNzIgMC00LjM5NDM3LTEuOTg0NS00LjM5NDM3LTQuNDE2MXYtOC4xMzQ1M2MwLTIuNDMxNjIgMS45NzM2NS00LjQxNjE3IDQuMzk0MzctNC40MTYxN2gxNS4yMTEyM2MyLjQyMDggMCA0LjM5NDQgMS45ODQ1NSA0LjM5NDQgNC40MTYxN3Y4LjEyMzYzYzAgMi40MzE2LTEuOTczNiA0LjQxNjEtNC4zOTQ0IDQuNDE2MWgtMy42MzFsLTMuMzE0OSA0LjQ3MDdjLS4xNTI3LjIwNzItLjQwMzUuMzI3MS0uNjU0Mi4zMjcxem0tNy42MDAxMy0yMC4xMjkwOGMtMS41MTU2OCAwLTIuNzU4NzUgMS4yNTM5OC0yLjc1ODc1IDIuNzgwNTV2OC4xMjM2M2MwIDEuNTM3NCAxLjIzMjE3IDIuNzgwNSAyLjc1ODc1IDIuNzgwNWg0LjA1NjMzYy4yNjE3IDAgLjUwMTYuMTIuNjU0MjUuMzI3MWwyLjg4OTU1IDMuOTE0NiAyLjkwMDUtMy45MTQ2Yy4xNTI3LS4yMDcxLjQwMzUtLjMyNzEuNjU0My0uMzI3MWg0LjA0NTRjMS41MTU3IDAgMi43NTg4LTEuMjU0IDIuNzU4OC0yLjc4MDV2LTguMTIzNjNjMC0xLjUzNzQ4LTEuMjMyMi0yLjc4MDU1LTIuNzU4OC0yLjc4MDU1eiIvPjwvZz48cGF0aCBkPSJtMTIuNzQ2OSA4LjM3OTc2Ljc3NTEgMS41OTEzNWMuMDkzLjE5NjI5LjI3OS4zNDA5OS40OTYuMzcxOTlsMS43MjU3LjI1ODRjLjU0NzYuMDgyNi43NjQ2Ljc2NDYuMzcyIDEuMTU3M2wtMS4yNTA0IDEuMjRjLS4xNTUuMTU1LS4yMjczLjM4MjQtLjE5NjMuNTk5NGwuMjk5NiAxLjc0NjNjLjA5MzEuNTU4LS40NzUzLjk3MTQtLjk2MS43MTNsLTEuNTM5Ny0uODI2NmMtLjE5NjMtLjEwMzQtLjQyMzYtLjEwMzQtLjYyIDBsLTEuNTM5Ny44MjY2Yy0uNDg1NjMuMjU4NC0xLjA1Mzk3LS4xNjUzLS45NjA5Ny0uNzEzbC4yOTk2Ny0xLjc0NjNjLjA0MTM0LS4yMTctLjAzMS0uNDQ0NC0uMTk2MzQtLjU5OTRsLTEuMjUwMzUtMS4yNGMtLjM5MjY3LS4zOTI3LS4xNzU2Ny0xLjA3NDcuMzcyMDEtMS4xNTczbDEuNzI1NjgtLjI1ODRjLjIxNy0uMDMxLjQwMy0uMTc1Ny40OTYtLjM3MTk5bC43NzUtMS41OTEzNWMuMjQ4LS41MDYzNS45NTA3LS41MDYzNSAxLjE4ODQgMHoiIGZpbGw9IiNmZmM0MDAiLz48L3N2Zz4="
        />
       <p  className={style.info}>4.7/5</p>
       <p  className={style.info}>Google rating</p>
        </div>

        <div>
        <img
          src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjUgMjciIHdpZHRoPSIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMi4zNDAyMyAxNC45MiAyLjU5LjYyIDIuMS0uNTFjLjk0LS4yMyAxLjkyLS4xMiAyLjc4MDAxLjNsMS4zNjk5Ni42NyA3LjE2IDYuNTktNS42OSAyLjY3Yy0xLjA1LjQ5LTIuMjkuNDItMy4yNjk5Ny0uMTlsLTYuMS0zLjgtMi4wNC0uMjgiIGZpbGw9IiM1OTIwYzUiLz48cGF0aCBkPSJtMTEuMTkwMSAyNi4zNGMtLjc3IDAtMS41MzAwNS0uMjEtMi4yMTAwNS0uNjNsLTUuOTYtMy43MS0xLjg4LS4yNmMtLjQwOTk5Ny0uMDYtLjY5OTk5Ny0uNDQtLjYzOTk5Ny0uODVzLjQ0LS43Ljg0OTk5Ny0uNjRsMi4wNC4yOGMuMS4wMS4yLjA1LjI5LjExbDYuMSAzLjhjLjc2MDA1LjQ4IDEuNzQwMDUuNTMgMi41NjAwNS4xNWw0LjY3LTIuMTktNi4yNS01Ljc2LTEuMjgwMDUtLjYyYy0uNy0uMzQtMS41MS0uNDMtMi4yOC0uMjVsLTIuMS41MWMtLjEyLjAzLS4yNC4wMy0uMzUgMGwtMi41OS0uNjJjLS40LS4xLS42NS0uNS0uNTUtLjlzLjUxLS42NS45LS41NWwyLjQyLjU4IDEuOTItLjQ2YzEuMS0uMjcgMi4yNy0uMTQgMy4yOTAwNS4zNmwxLjM3LjY3Yy4wNy4wMy4xMi4wNy4xOC4xMmw3LjE2IDYuNTljLjE4LjE3LjI3LjQyLjIzLjY3cy0uMi40Ni0uNDIuNTZsLTUuNjkgMi42N2MtLjU3LjI3LTEuMTguNC0xLjc4LjR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTIyLjQ0MDUgMTQuMjgtMi44MyAxLjItNi4wMi0uNDNjLS45MS0uMDctMS44MS4yOS0yLjQxLjk3bC0yLjk1MDAzIDMuM3MyLjEzMDAzIDIuNTQgNS4zMTAwMy0uNTdsNC44IDMuODYgMy4xLTEuNTYgMi42Mi0uNzkiIGZpbGw9IiM1OTIwYzUiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMTguMzQwMyAyMy4zNDk5Yy0uMTcgMC0uMzMtLjA2LS40Ny0uMTdsLTQuMy0zLjQ2Yy0xLjA5MDEuOTItMi4yMyAxLjM2LTMuMzEgMS4zMS0xLjYxMDA1LS4wOC0yLjU2MDA1LTEuMTktMi42MDAwNS0xLjI0LS4yNC0uMjktLjIzLS43LjAyLS45OGwyLjk1MDA1LTMuM2MuNzUtLjg0IDEuODgtMS4zIDMuMDE5OS0xLjIybDUuODQwMS40MiAyLjY2LTEuMTNjLjM4LS4xNi44Mi4wMi45Nzk5LjQuMTYuMzgtLjAxOTkuODItLjM5OTkuOThsLTIuODMgMS4yYy0uMTEuMDUtLjIzMDEuMDctLjM1LjA2bC02LjAyLS40M2MtLjY4LS4wNS0xLjM1MDEuMjItMS44MDAxLjcybC0yLjQyOTk1IDIuNzFjLjI2LjE1LjYxLjI5IDEuMDQwMDUuMzEuODMuMDMgMS43My0uNDIgMi42Ny0xLjMzLjI3LS4yNy43LS4yOS45OS0uMDVsNC40MiAzLjU2IDIuNjctMS4zNHMuMDc5OS0uMDQuMTE5OS0uMDVsMi42Mi0uNzljLjQtLjEyLjgyLjExLjkzMDEuNS4xMi40LS4xMTAxLjgxLS41LjkzbC0yLjU2Ljc3LTMuMDQgMS41M2MtLjExLjA1LS4yMi4wOC0uMzQuMDh6Ii8+PHBhdGggZD0ibTEzLjU1MDIgMjUuNTk5OWMtLjE2IDAtLjMxLS4wNS0uNDUtLjE1bC0yLjM1LTEuNzVjLS4zMy0uMjUtLjQtLjcyLS4xNi0xLjA1LjI1LS4zMy43Mi0uNCAxLjA1LS4xNWwyLjM1IDEuNzVjLjMzLjI1LjQuNzIuMTYgMS4wNS0uMTUuMi0uMzcuMy0uNi4zeiIvPjxwYXRoIGQ9Im0xNS45ODk4IDI0LjQ1Yy0uMTYgMC0uMzItLjA1LS40Ni0uMTZsLTIuODMtMi4yMWMtLjMzLS4yNS0uMzgtLjczLS4xMy0xLjA1LjI1LS4zMy43Mi0uMzkgMS4wNS0uMTNsMi44MyAyLjIxYy4zMy4yNS4zOC43My4xMyAxLjA1LS4xNS4xOS0uMzcuMjktLjU5LjI5eiIvPjwvZz48cGF0aCBkPSJtMTIuMzY5OSAxMi40M2MzLjI4NjEgMCA1Ljk1LTIuNjE0NjYgNS45NS01Ljg0cy0yLjY2MzktNS44NC01Ljk1LTUuODRjLTMuMjg2MDcgMC01Ljk0OTk4IDIuNjE0NjYtNS45NDk5OCA1Ljg0czIuNjYzOTEgNS44NCA1Ljk0OTk4IDUuODR6IiBmaWxsPSIjNTkyMGM1Ii8+PHBhdGggZD0ibTEyLjM3MDIgMTMuMTdjLTMuNzAwMDQgMC02LjcxMDA0LTIuOTYtNi43MTAwNC02LjU5czMuMDItNi41OCA2LjcxMDA0LTYuNThjMy42OSAwIDYuNyAyLjk2IDYuNyA2LjU5cy0zLjAxIDYuNTktNi43IDYuNTl6bTAtMTEuNjdjLTIuODcwMDQgMC01LjIxMDA0IDIuMjgtNS4yMTAwNCA1LjA5czIuMzMgNS4wOSA1LjIxMDA0IDUuMDljMi44OCAwIDUuMi0yLjI4IDUuMi01LjA5cy0yLjMzLTUuMDktNS4yLTUuMDl6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTExLjY2MDIgOC43MDAxYy0uMTkgMC0uMzgtLjA3LS41My0uMjFsLTEuMzUwMDItMS4zMmMtLjMtLjI5LS4zLS43NyAwLTEuMDYuMjkwMDItLjMuNzYwMDItLjMgMS4wNjAwMi0uMDFsLjgyLjgxIDIuMjYtMi4yMmMuMy0uMjkuNzctLjI4IDEuMDYuMDEuMjkuMy4yOS43NyAwIDEuMDZsLTIuNzkgMi43M2MtLjE1LjE0LS4zNC4yMS0uNTMuMjF6IiBmaWxsPSIjZmZjNDAwIi8+PC9zdmc+"
        />
        <p  className={style.info}>400 Cr+</p>
        <p  className={style.info}>Claims settled</p>
        </div>

      </div>
      
{/* 
      <div className="banner">
        <img
          className="banner_left"
          src="https://acko-home-prod.ackoassets.com/next_assets/eb5a39996779eebb83cae41d02d9f74d91aedcf7/_next/static/images/arshad-warsi-banner-58d51f52b11fa83c7786a80bd1a02169.png"
          alt=""
        />
        <img
          className="banner_middle"
          src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2Feb5a39996779eebb83cae41d02d9f74d91aedcf7%2F_next%2Fstatic%2Fimages%2Ftypo-low-premium-new-884973769e7a8f45764b63addb7a6b14.svg&w=256&q=75"
          alt=""
        />
        <div className="partners">
          <div className="partners_text_div">
            <p className="partners_text">Official Insurance Partner</p>
          </div>
          <div className="ipl_teams">
            <img
              className="ipl_team_img"
              src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2Feb5a39996779eebb83cae41d02d9f74d91aedcf7%2F_next%2Fstatic%2Fimages%2Fsunrisers-hyderabad-baa8b5ac7605cd2fa307c8de9b5a36a5.svg&w=48&q=75"
              alt=""
            />
            <img
              className="ipl_team_img"
              src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2Feb5a39996779eebb83cae41d02d9f74d91aedcf7%2F_next%2Fstatic%2Fimages%2Fdelhi-capitals-88769317f23983e5c4439560a4efdf5f.svg&w=48&q=75"
              alt=""
            />
            <img
              className="ipl_team_img"
              src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2Feb5a39996779eebb83cae41d02d9f74d91aedcf7%2F_next%2Fstatic%2Fimages%2Fmumbai-indians-678e33cfeb6c33bad8102ccfeccadad7.svg&w=64&q=75"
              alt=""
            />
          </div>
        </div>
      </div> */}

      <img
        className={style.right_banner}
        src="https://acko-home-prod.ackoassets.com/next_assets/eb5a39996779eebb83cae41d02d9f74d91aedcf7/_next/static/images/homepage-banner-illustration-2-99577afed0f02e7ee1411f1e8aede6c9.svg"
        alt="right-banner"
      />


    </div>

   
  );
};
