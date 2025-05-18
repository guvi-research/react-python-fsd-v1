import time
import logging
from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)

class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start_time = time.time()
        
        # Log request method and URL
        logging.info(f"Request: {request.method} {request.url}")
        # Optionally log headers
        # logging.info(f"Request headers: {dict(request.headers)}")
        
        response = await call_next(request)
        
        process_time = time.time() - start_time
        
        # Log response status and processing time
        logging.info(f"Response: {response.status_code} - Processed in {process_time:.2f}s")
        # Optionally log response headers
        # logging.info(f"Response headers: {dict(response.headers)}")
        
        return response