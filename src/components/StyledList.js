import styled from "styled-components";

export default styled.ul`
  list-style-type: none;
  font-size: 1.2rem;
  padding: 0px;
  li {
    margin-bottom: 8px;
    background-color: #8e4154;
    padding: 10px;
    border-radius: 4px;
    margin: 0 auto 8px;
    /* The container */
    label {
      position: relative;
      cursor: pointer;
      font-size: 22px;
      user-select: none;
    }

    /* Hide the browser's default checkbox */
    label input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    label span {
      display: inline-block;
      height: 25px;
      width: 25px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }

    /* On mouse-over, add a grey background color */
    label:hover input ~ span {
      background-color: #ccc;
    }

    /* When the checkbox is checked, add an organge background */
    label input:checked ~ span {
      background-color: #ffb998;
    }

    /* Create and style the checkmark/indicator (hidden when not checked) */
    label span:after {
      content: "";
      position: absolute;
      display: none;

      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }

    /* Show the checkmark when checked */
    label input:checked ~ span:after {
      display: block;
    }

    /* To-do item text */
    p {
      display: inline;
      margin-left: 10px;
    }

    /* Delete button */
    button {
      float: right;
      margin-right: 0px;
      background-color: #f5f5f5;
      border: 4px solid #ffb998;
      border-radius: 4px;
      margin-top: 3px;
      font-weight: 600;
    }
  }
`;
