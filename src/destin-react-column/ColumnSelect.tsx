/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ApolloError } from '@apollo/client';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { PayStudentForm } from '../Components/MarketHome/PayStudentForm';
import {
   AwardStudentsPointsMutation,
   useAwardStudentsPointsMutation,
} from '../__generated__/types';
import Container from './components/container/container';
import type { OptionType, Theme, ColumnType, OptionsType, ActionMeta, ActionTypes } from './types';

interface ColumnSelectProps {
   editStudents: any;
   courseId: string;
   /**
    * The array of available select options.
    */
   options: OptionsType;
   /**
    * The function called on change.
    */
   onChange: (values: OptionsType, actionMeta: ActionMeta) => void;
   /**
    * Set the initial selected values.
    */
   defaultValue?: OptionsType;
   /**
    * Set the maximum number of options that can be selected.
    */
   max?: number;
   /**
    * The header text of the left column.
    * @default 'Options'
    */
   leftHeader?: string;
   /**
    * The header text of the right column.
    * @default 'Selected'
    */
   rightHeader?: string;
   /**
    * Enable to make the columns searchable.
    * @default false
    */
   isSearchable?: boolean;
   /**
    * The placeholder string for the search inputs.
    * @default 'Search ...'
    */
   searchPlaceholder?: string;
   /**
    * Disable the "Add All" and "Remove All" buttons.
    * @default false
    */
   disableAllButtons?: boolean;
   /**
    * Disable double clicking to add/remove a list option.
    * @default false
    */
   disableDoubleClick?: boolean;
   /**
    * Disable keyboard navigation on the list of options.
    * @default false
    */
   disableKeyboard?: boolean;
   /**
    * The react-column-select theme object.
    */
   theme?: Theme;
}

export function useStateWithDep<T>(defaultValue: any) {
   const [value, setValue] = useState<T>(defaultValue);

   useEffect(() => {
      setValue(defaultValue);
   }, [defaultValue]);
   return [value, setValue];
}

const ColumnSelect: FC<ColumnSelectProps> = ({
   editStudents,
   courseId,
   options,
   onChange,
   defaultValue = [],
   max,
   leftHeader,
   rightHeader,
   isSearchable,
   searchPlaceholder,
   disableAllButtons,
   disableDoubleClick,
   disableKeyboard,
   theme,
}) => {
   const [availableOptions, setAvailableOptions] = useState<OptionsType>(options);
   const [selectOptions, setSelectOptions] = useState<OptionsType>(options);
   const [current, setCurrent] = useState<OptionType>(options[0]);
   const [selectedOptions, setSelectedOptions] = useState<OptionsType>(defaultValue);
   const [currentAction, setCurrentAction] = useState<ActionTypes>();
   const isMax = useMemo(() => (max ? selectedOptions.length >= max : false), [
      max,
      selectedOptions.length,
   ]);

   const disableAddAll = useMemo(() => (max ? selectOptions.length > max : false), [
      max,
      selectOptions.length,
   ]);

   useEffect(() => {
      if (currentAction) {
         // eslint-disable-next-line react-hooks/rules-of-hooks
         onChange(selectedOptions, { action: currentAction });
      }
   }, [currentAction, onChange, selectedOptions]);

   const add = () => {
      if (selectedOptions.find((c) => c.value === current.value) || isMax) return;
      setSelectOptions(selectOptions.filter((o: OptionType) => o.value !== current.value));
      setSelectedOptions([...selectedOptions, current]);

      setCurrentAction('add');
   };

   const addAll = () => {
      if (!selectOptions.length) return;
      setSelectedOptions([...selectedOptions, ...selectOptions]);
      setCurrent(selectOptions[0]);
      setSelectOptions([]);

      setCurrentAction('add-all');
   };

   const sortLabels = (a: OptionType, b: OptionType) => {
      return a.label.localeCompare(b.label);
   };

   const remove = () => {
      if (selectOptions.find((c: OptionType) => c.value === current.value)) return;
      setSelectedOptions(selectedOptions.filter((o) => o.value !== current.value));
      setSelectOptions([...selectOptions, current].sort(sortLabels));

      setCurrentAction('remove');
   };

   const removeAll = () => {
      if (!selectedOptions.length) return;
      setSelectOptions([...selectOptions, ...selectedOptions].sort(sortLabels));
      setCurrent(selectedOptions[0]);
      setSelectedOptions([]);

      setCurrentAction('remove-all');
   };

   useEffect(() => {
      if (JSON.stringify(options) !== JSON.stringify(availableOptions)) {
         removeAll();
         setAvailableOptions(options);
         setSelectOptions(options);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [options]);

   const handleNext = (column: ColumnType) => {
      const isOptionsCol = column === 'options';
      const activeOptions = isOptionsCol ? selectOptions : selectedOptions;

      const currentIndex = activeOptions.findIndex((o: OptionType) => o.value === current.value);

      if (currentIndex !== activeOptions.length - 1) {
         setCurrent(activeOptions[currentIndex + 1]);
      }
   };

   const handlePrevious = (column: ColumnType) => {
      const isOptionsCol = column === 'options';
      const activeOptions = isOptionsCol ? selectOptions : selectedOptions;

      const currentIndex = activeOptions.findIndex((o) => o.value === current.value);
      if (currentIndex !== 0) {
         setCurrent(activeOptions[currentIndex - 1]);
      }
   };

   const customTheme = {
      headerBgColor: '#d6b1ff',
      columnBorderColor: '#cfa4ff',
      textColor: '#000000',
      columnBgColor: '#CBD5E0',
      buttonBgColor: '#CBD5E0',
      searchFocusBorderColor: '#805Ad5',
      ...theme,
   };

   const onMutationCompleted = (data: AwardStudentsPointsMutation) => {
      console.log('Mutation Completed');
      editStudents(data.awardStudentsPoints);
      removeAll();
   };

   const onMutationError = (e: ApolloError) => {
      console.log(e.message);
   };

   const [
      awardPoints,
      { loading: mutationLoading, error: mutationError },
   ] = useAwardStudentsPointsMutation({
      onCompleted: onMutationCompleted,
      onError: onMutationError,
   });

   const onPay = (points: number) => {
      if (selectedOptions.length < 1 || points < 1) return;
      awardPoints({
         variables: {
            points,
            courseId,
            studentIds: selectedOptions.map((option) => {
               return option.value as string;
            }),
         },
      }).catch((e) => {
         console.log(e);
      });
   };

   return (
      <div>
         <Container
            leftHeader={leftHeader}
            rightHeader={rightHeader}
            current={current}
            select={(option: OptionType) => setCurrent(option)}
            add={add}
            addAll={addAll}
            remove={remove}
            removeAll={removeAll}
            options={selectOptions}
            selected={selectedOptions}
            isMax={isMax}
            disableAddAll={disableAddAll}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isSearchable={isSearchable}
            searchPlaceholder={searchPlaceholder}
            disableAllButtons={disableAllButtons}
            disableDoubleClick={disableDoubleClick}
            disableKeyboard={disableKeyboard}
            theme={customTheme}
         />
         <PayStudentForm onSubmit={onPay} submitting={mutationLoading} />
      </div>
   );
};

export default ColumnSelect;
