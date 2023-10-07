import { PlusCircleIcon } from 'lucide-react';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: 'To Do',
  inprogress: 'In Progress',
  done: 'Done',
};

function Column({ id, todos, index }: Props) {
  return (
    <Draggable
      draggableId={id}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable
            droppableId={index.toString()}
            type='card'
          >
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? 'bg-green-200' : 'bg-white/50'
                }`}
              >
                <div className='flex justify-between p-2'>
                  <h2 className='font-bold text-xl'>{idToColumnText[id]}</h2>
                  <span className='text-gray-500 bg-gray-200 rounded-full font-normal px-2 py-1 text-sm'>
                    {todos.length}
                  </span>
                </div>

                <div className='space-y-2'>
                  {todos.map((todo, index) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                    >
                      {(provided) => (
                        <TodoCard
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className='bg-white rounded-2xl shadow-sm p-2'
                        >
                          <p className='text-gray-800'>{todo.title}</p>
                        </TodoCard>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}

                  <div className='flex items-end justify-end p-2'>
                    <button className='text-green-500 hover:text-green-600'>
                      <PlusCircleIcon className='h-10 w-10' />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
