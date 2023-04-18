<template>
    <InputFormWidget></InputFormWidget>
    <CheckBoxWidget></CheckBoxWidget>
    <RadioButtonWidget></RadioButtonWidget>
    <SelectButtonWidget></SelectButtonWidget>
</template>

<script>
import InputFormWidget from './formwidgets/InputFormWidget.vue';
import CheckBoxWidget from './formwidgets/CheckBoxWidget.vue';
import RadioButtonWidget from './formwidgets/RadioButtonWidget.vue';
import SelectButtonWidget from './formwidgets/SelectButtonWidget.vue'

export default{
    components: {
        InputFormWidget,
        CheckBoxWidget,
        RadioButtonWidget,
        SelectButtonWidget
    }
}

</script>