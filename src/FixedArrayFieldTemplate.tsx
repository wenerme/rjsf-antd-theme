import React from 'react';
import { ArrayFieldTemplateItem } from './ArrayFieldTemplateItem';
import { AddButton } from './AddButton';

export const FixedArrayFieldTemplate = ({
  canAdd,
  className,
  DescriptionField,
  disabled,
  formContext,
  formData,
  idSchema,
  items,
  onAddClick,
  readonly,
  registry,
  required,
  schema,
  title,
  TitleField,
  uiSchema,
}) => (
  <fieldset className={className} id={idSchema.$id}>
    {(title || canAdd) && (
      <TitleField
        id={`${idSchema.$id}__title`}
        key={`array-field-title-${idSchema.$id}`}
        required={required}
        title={uiSchema['ui:title'] || title}
        description={uiSchema['ui:description'] || schema.description}
        extra={canAdd && <AddButton className="array-item-add" disabled={disabled || readonly} onClick={onAddClick} />}
      />
    )}

    <div className="array-item-list" key={`array-item-list-${idSchema.$id}`}>
      {items && items.map(ArrayFieldTemplateItem)}
    </div>
  </fieldset>
);
