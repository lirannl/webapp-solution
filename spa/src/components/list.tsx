import React from "react";
import { ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";

/**
 * Generic container builder
 * @param Outer Must be a usable React Element Class
 * @param Inner Must be a usable React Element Class
 * @returns An element which wraps children with the given classes
 */
const container = (Outer: any, Inner: any) =>
    ({ children }: { children: (JSX.Element | null)[] }) => <Outer>
        {children
            // Filter null fields
            .filter(c => c)
            .map((child, index) => <Inner key={index}>{child}</Inner>)}
    </Outer>

// ListGroup Wrapper
export const List = container(ListGroup, ListGroupItem);

export const Horz = container(Row, Col);