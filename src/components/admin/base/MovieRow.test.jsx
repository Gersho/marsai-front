import { render, screen } from "@testing-library/react"
import { expect, it } from 'vitest'
import MovieRow from "./MovieRow"
import { MemoryRouter } from "react-router-dom"

const data = {
    slug: "slug",
    cover_path: "cover_path",
    english_title: "Spiderman",
    status: "pending_review",
    director: {
        firstname: "Bob",
        lastname: "Eponge"
    },
    submitted_at: "2026-05-20 11:20:45"
}

it("Affiche le prenom du directeur", () => {
    render(<MemoryRouter>
        <MovieRow data={data} />
    </MemoryRouter>)

    expect(screen.getByRole('row'))
        .toHaveTextContent("Bob")
})

it("Affiche le nom du directeur", () => {
    render(<MemoryRouter>
        <MovieRow data={data} />
    </MemoryRouter>)

    expect(screen.getByRole('row'))
        .toHaveTextContent("Eponge")
})

it("Affiche le titre du film", () => {
    render(<MemoryRouter>
        <MovieRow data={data} />
    </MemoryRouter>)

    expect(screen.getByText("Spiderman"))
        .toBeInTheDocument()
})

it("Affiche le status du film", () => {
    render(<MemoryRouter>
        <MovieRow data={data} />
    </MemoryRouter>)

    expect(screen.getByText("pending_review"))
        .toBeInTheDocument()
})

