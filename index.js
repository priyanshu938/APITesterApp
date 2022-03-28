//Utility functions:
//1. Utility function to get DOM element from string
function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}

//Initialize no of parameters
let addedParamCount = 0;
//Hide parameters box initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";
//If the user clicks on params box,hide the json box
let paramsradio = document.getElementById("paramsRadio");
paramsradio.addEventListener("click", () => {
  document.getElementById("requestJsonBox").style.display = "none";
  document.getElementById("parametersBox").style.display = "block";
});
//If the user clicks on json box,hide the params box
let jsonradio = document.getElementById("jsonRadio");
jsonradio.addEventListener("click", () => {
  document.getElementById("parametersBox").style.display = "none";
  document.getElementById("requestJsonBox").style.display = "block";
});
//If the user clicks on + button, add more parameters
let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
  let params = document.getElementById("params");
  let string = ` <div class="form-row my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${
      addedParamCount + 2
    }</label>
    <div class="col-md-4" style="display:inline-block">
        <input type="text" class="form-control" id="parameterKey${
          addedParamCount + 2
        }" placeholder="Enter Parameter ${addedParamCount + 2} Key" />
    </div>

    <div class="col-md-4" style="display:inline-block">
        <input type="text" class="form-control" id="parameterValue${
          addedParamCount + 2
        }"
            placeholder="Enter Parameter ${addedParamCount + 2} Value" />
    </div>
    <button class="btn btn-primary btn-md deleteParam">-</button>
</div>`;
  //Convert the element to string to DOM node
  let paramElement = getElementFromString(string);
  params.appendChild(paramElement);
  //Add event listner to remove the parameter on clicking - event
  let deleteParam = document.getElementsByClassName("deleteParam");
  for (item of deleteParam) {
    item.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  }
  addedParamCount++;
});

//If the user clicks on the submit button t
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  //Show please wait in the response box to request patience from the user
  document.getElementById("responseJsonText").value =
    "Please wait...Fetching response";
  //Fetch all the values user has entered
  let url = document.getElementById("url").value;
  let requestType = document.querySelector("input[name='requestType']").value;
  let contentType = document.querySelector("input[name='contentType']").value;
});
