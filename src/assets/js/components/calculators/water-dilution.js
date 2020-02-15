export default function() {
    let q = input => document.querySelector(input);
    let qa = input => document.querySelectorAll(input);

    //field references
    let f_calc_types = qa('[name="calc_type"]');
    let f_end_volume = q('#end_volume');
    let f_end_strength = q('#end_strength');
    let f_start_strength = q('#start_strength');
    let f_start_alcohol = q('#start_alcohol');
    let f_start_water = q('#start_water');
    //add event handlers
    q('#calc_dilution').addEventListener('click', calculate);
    q('#clear_dilution').addEventListener('click', clearValues);

    //define and set variables
    let calc_type, end_volume, end_strength, start_strength, start_alcohol, start_water;
    getValues();

    function clearValues(){
        f_end_strength.value = '';
        f_end_volume.value = '';
        f_end_strength.value = '';
        f_start_strength.value = '';
        f_start_alcohol.value = '';
        f_start_water.value = '';
    }
    function getValues(){
        for (let i = 0, length = f_calc_types.length; i < length; i++) {
            if (f_calc_types[i].checked) {
                calc_type = f_calc_types[i].value;
                break;
            }
        }
        end_volume = f_end_volume.value;
        end_strength = f_end_strength.value;
        start_strength = f_start_strength.value;
        start_alcohol = f_start_alcohol.value;
        start_water = f_start_water.value;
        console.log({calc_type,
            end_volume,
            end_strength,
            start_strength,
            start_alcohol,
            start_water});
    }

    function updateValues(){
        f_end_strength.value = parseInt(end_strength);
        f_end_volume.value = parseInt(end_volume);
        f_end_strength.value = parseInt(end_strength);
        f_start_strength.value = parseInt(start_strength);
        f_start_alcohol.value = parseInt(start_alcohol);
        f_start_water.value = parseInt(start_water);
    }
    function calculate() {
        getValues();
        switch (calc_type) {
            case 'start_alcohol':
                start_alcohol = (end_strength * end_volume) / start_strength;
                start_water = end_volume - start_alcohol;
                break;
            case 'end_volume':
                end_volume = (start_alcohol * start_strength) / end_strength;
                start_water = end_volume - start_alcohol;
                break;
        }
        updateValues();
    }
};