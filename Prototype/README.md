Expo Chess
A simple, cross-platform Chess game built with Expo and React Native (Web, iOS, Android).

Features
- 8×8 Board with alternating light & dark squares
- Chess.com “Neo” piece graphics loaded via CDN (no local assets)
- Turn Tracking: White/Black indicator above the board
- Free Placement Mode: Tap to pick up a piece of your color, tap any square to place it
- Modular Components: Board, Piece components and move logic separated for clarity

Installation
Prerequisites:
- Node ≥14
- npm or yarn
- Expo CLI (install globally with: npm install -g expo-cli)

Steps:
Clone the repo:
git clone https://github.com/yourusername/expo-chess.git
cd Prototype
Install dependencies:
npm install
or
yarn install

Start the app:
For mobile (iOS/Android simulator or physical device):
expo start

For web:
expo start --web

Usage
Tap a piece on your turn (white starts).
Tap any square to move it.
Watch the turn indicator update.
Project Structure

app/
(tabs)/
index.tsx      # HomeScreen with game logic and turn indicator
components/
Board.tsx       # Renders the 8×8 grid and pieces
Piece.tsx       # Fetches and displays Neo piece PNGs by type
assets/           # Static assets (if any)
README.txt       # This file

Customization
Board colors: pass lightColor & darkColor props to 
Board size: adjust size prop (default = viewport min - 32px)
Piece theme: swap pieceUris in Piece.tsx to another CDN or local assets

Future Improvements
- Legal Move Highlights: integrate move generation and visuals
- Advanced Rules: castling, en-passant, promotion, check/checkmate detection
- Drag & Drop: smooth drag preview instead of tap-to-place
- Animations: piece slide animations
- Multiplayer: online games with WebSockets or Firebase
- AI to play user