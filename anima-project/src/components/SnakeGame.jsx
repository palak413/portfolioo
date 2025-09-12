import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const INITIAL_DIRECTION = { x: 0, y: -1 };

const SnakeGame = ({ onWin, onSkip }) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    return newFood;
  }, []);

  const moveSnake = useCallback(() => {
    if (!gameStarted || gameOver) return;

    setSnake((currentSnake) => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };
      
      head.x += direction.x;
      head.y += direction.y;

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        return currentSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
        
        // Win condition: score reaches 50
        if (score + 10 >= 50) {
          setTimeout(() => onWin(), 1000);
        }
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, gameStarted, generateFood, onWin, score]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameStarted) {
        setGameStarted(true);
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameStarted]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gray-800/50 border border-green-500/20 rounded-lg p-6 backdrop-blur-sm"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-green-400 mb-2">Snake Game Challenge</h3>
        <p className="text-gray-400 mb-4">
          {!gameStarted ? "Press any arrow key to start" : `Score: ${score} | Target: 50`}
        </p>
        
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={onSkip}
            className="px-4 py-2 bg-yellow-500/20 border border-yellow-500 text-yellow-400 rounded hover:bg-yellow-500/30 transition-all"
          >
            Skip Game
          </button>
          {gameOver && (
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-green-500/20 border border-green-500 text-green-400 rounded hover:bg-green-500/30 transition-all"
            >
              Restart
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <div 
          className="grid gap-0 bg-black/50 border border-green-500/30 p-2 rounded"
          style={{ 
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
            width: '400px',
            height: '400px'
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);
            
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            const isHead = snake[0]?.x === x && snake[0]?.y === y;
            
            return (
              <div
                key={index}
                className={`w-full h-full border border-gray-800/30 ${
                  isSnake 
                    ? isHead 
                      ? 'bg-green-400 shadow-lg shadow-green-400/50' 
                      : 'bg-green-500'
                    : isFood 
                      ? 'bg-red-500 shadow-lg shadow-red-500/50' 
                      : 'bg-gray-900/50'
                }`}
              />
            );
          })}
        </div>
      </div>

      {gameOver && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-4"
        >
          <p className="text-red-400 text-lg font-bold">Game Over!</p>
          <p className="text-gray-400">Final Score: {score}</p>
        </motion.div>
      )}

      {score >= 50 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mt-4"
        >
          <p className="text-green-400 text-xl font-bold">🎉 You Won! 🎉</p>
          <p className="text-gray-400">Redirecting to next section...</p>
        </motion.div>
      )}

      <div className="text-center mt-4 text-sm text-gray-500">
        Use arrow keys to control the snake
      </div>
    </motion.div>
  );
};

export default SnakeGame;
