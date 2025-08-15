import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

import { GripVertical, Eye, EyeOff } from 'lucide-react';

const SectionReorder = ({ sections, onReorder, visibleSections, onToggleVisibility }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onReorder(items);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Section Order & Visibility</h3>
      <p className="text-sm text-gray-600">Drag sections to reorder them in your resume. Toggle visibility to show/hide sections.</p>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
              {sections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm ${
                        snapshot.isDragging ? 'shadow-lg' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div {...provided.dragHandleProps} className="cursor-grab active:cursor-grabbing">
                          <GripVertical className="w-5 h-5 text-gray-400" />
                        </div>
                        <span className="font-medium text-gray-900">{section.label}</span>
                      </div>
                      
                      <button
                        onClick={() => onToggleVisibility(section.id)}
                        className={`p-2 rounded-md transition-colors ${
                          visibleSections.includes(section.id)
                            ? 'text-green-600 hover:bg-green-50'
                            : 'text-gray-400 hover:bg-gray-50'
                        }`}
                      >
                        {visibleSections.includes(section.id) ? (
                          <Eye className="w-4 h-4" />
                        ) : (
                          <EyeOff className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default SectionReorder;