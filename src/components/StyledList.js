import styled from "styled-components";

export default styled.ul`
  list-style-type: none;
  font-size: 1.2rem;
  padding: 0px;
  display: grid;
  li {
    display: grid;
    grid-template-columns: 8fr 1fr;
    margin-bottom: 8px;
  }
  /* List item (checkbox + list text + delete button) */
  li div:first-child {
    background-color: ${props => props.theme.secondaryDark};
    /* padding: 10px; */
    padding: 0px 10px;
    border-radius: 4px;
    margin: 0px;
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    align-items: center;

    /* Checkbox container */
    label {
      position: relative;
      cursor: pointer;
      font-size: 22px;
      user-select: none;
      justify-self: center;
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
      vertical-align: middle;
      /* margin-top: 3px; */
      margin-top: -5px;
      height: 25px;
      width: 25px;
      background-color: #f5f5f5;
      border-radius: 4px;
      transition: all 300ms;
    }

    /* On mouse-over, add a grey background color */
    label:hover input ~ span {
      background-color: ${props => props.theme.accent};
    }

    /* When the checkbox is checked, add an organge background */
    label input:checked ~ span {
      background-color: ${props => props.theme.accent};
    }

    /* Create and style the checkmark/indicator (hidden when not checked) */
    label span:after {
      content: "";
      position: absolute;
      display: none;

      left: 9px;
      top: 8px;
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
      display: inline-block;
      vertical-align: middle;
      /* width: 400px; */
      margin-left: 10px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
    }

    /* Delete button */
    > button {
      display: inline-block;
      vertical-align: middle;
      margin-right: 0px;
      height: 25px;
      width: 25px;
      background-color: ${props => props.theme.accent};
      border: none;
      border-radius: 4px;
      font-weight: 600;
      color: ${props => props.theme.secondary};
      text-align: center;
      justify-self: center;
      transition: background-color 300ms;
      &:hover {
        cursor: pointer;
        background-color: #f5f5f5;
      }
    }
  }

  /* Re-order buttons container */
  li div:last-child {
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-items: center;
  }

  /* Re-order buttons */
  li div button {
    display: block;
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.theme.secondaryDark};
    color: #f5f5f5;
    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
    &:focus {
      outline: none;
    }
  }
`;
