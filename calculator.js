///////////////////////////////////////////////////////////////////////////////
//---------------------------Atick Faisal, 2018------------------------------//
///////////////////////////////////////////////////////////////////////////////
function insert(i) {
    let input = document.form.input.value;
        input = input + i;
        document.form.input.value = input;
    }
    ///////////////////////////////////////////////
    function equal() {
        let input = document.form.input.value;
        let output = eval(input);
        if ((output % 1) != 0) {
            output = output.toFixed(4);
        }
        document.form.output.value = output;
    }
    ///////////////////////////////////////////////
    function all_clear() {
        document.form.input.value = null;
        document.form.output.value = null;
    }
    ///////////////////////////////////////////////
    function backspace() {
        let input = document.form.input.value;
        input = input.substring(0, input.length - 1);
        document.form.input.value = input;
    }