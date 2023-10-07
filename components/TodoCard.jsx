'use client';

import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';

type Props = {
  todo: Todo,
  index: number,
  id: TypedColumn,
  innerRef: (element: HTMLElement | null) => void,
  draggableProps: DraggableProvidedDraggableProps,
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined,
};

function TodoCard({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {
  return <div>TodoCard</div>;
}

export default TodoCard;
