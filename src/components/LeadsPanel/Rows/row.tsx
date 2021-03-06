import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { downloadLeadsFromLocalStorage, updateLocalStorageLeadsStatus } from "../../../services/api";

export function Rows() {

    var oneLead;

    const columnsFromBackend = {

        1: {
            name: 'Cliente em Potencial',
            items: downloadLeadsFromLocalStorage().filter(lead => lead.status === 'Cliente em Potencial')
        },
        2: {
            name: 'Dados Confirmados',
            items: downloadLeadsFromLocalStorage().filter(lead => lead.status === 'Dados Confirmados')
        },
        3: {
            name: 'Reunião Agendada',
            items: downloadLeadsFromLocalStorage().filter(lead => lead.status === 'Reunião Agendada')
        }
    };
    console.log(columnsFromBackend)
    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination, draggableId } = result;
        console.log(draggableId)


        if (source.droppableId === '2' && destination.droppableId === '3') {
            oneLead = downloadLeadsFromLocalStorage()
            console.log(oneLead)
            oneLead = (oneLead.find((lead) => {
                return lead.id === draggableId;
            }))
            oneLead.status = 'Reunião Agendada'
            console.log(oneLead)
            updateLocalStorageLeadsStatus(oneLead)
        } else {

            if (source.droppableId === '1' && destination.droppableId === '2') {
                oneLead = downloadLeadsFromLocalStorage()
                console.log(oneLead)
                oneLead = (oneLead.find((lead) => {
                    return lead.id === draggableId;
                }))
                oneLead.status = 'Dados Confirmados'
                console.log(oneLead)
                updateLocalStorageLeadsStatus(oneLead)
            }
        }

        if (source.droppableId !== destination.droppableId &&
            !((source.droppableId === '1' && destination.droppableId === '3')
                || (source.droppableId === '2' && destination.droppableId === '1')
                || (source.droppableId === '3' && (destination.droppableId === '1' || destination.droppableId === '2')))) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };

    const [columns, setColumns] = useState(columnsFromBackend);
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                            key={columnId}
                        >
                            <h3>{column.name}</h3>
                            <div style={{ margin: 20 }}>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver
                                                        ? "lightblue"
                                                        : "lightgrey",
                                                    padding: 4,
                                                    width: 350,
                                                    minHeight: 500
                                                }}
                                            >
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            userSelect: "none",
                                                                            padding: 16,
                                                                            margin: "0 0 8px 0",
                                                                            minHeight: "50px",
                                                                            backgroundColor: snapshot.isDragging
                                                                                ? "#FF0000"
                                                                                : "#272727",
                                                                            color: "white",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        {item.name}
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );

}